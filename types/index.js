import { queryType } from './query.js';
import { userType } from './user/index.js';
import { articleType } from './article/index.js';
import { User } from './interfaces.js';
import { mutationType } from './mutation.js';

export const typeDefs = [queryType, mutationType, userType, User, articleType];
export const resolvers = {
    Query: {
        users: async (parent, args, { db }) => {
            return await db.User.find().populate('articles');
        },
        user: async (parent, { id }, { db }) => {
            const u = await db.User.findById(id).populate('articles');
            if (id === '5d330a9a2eb9dc093089ec2e') {
                return Object.assign(u, { money: 1000 });
            }
            return u;
        },
    },
    Mutation: {
        createUser: async (_, { user }, { db }) => {
            const createdUser = new db.User(user);
            await createdUser.save();
            return createdUser;
        },
        createArticle: async (_, { article }, { db }) => {
            const createdArticle = new db.Article(article);
            await createdArticle.save();
            const author = await db.User.findById(article.createdBy);
            author.articles.push(createdArticle);
            await author.save();
            return createdArticle;
        },
    },
    User: {
        __resolveType(user, context, info) {
            if (user.money) {
                return 'Director';                
            }
    
            return 'Author';
        }
    },
};