const List = require('../../models/List');


module.exports = {
    Query: {
        getLists: () => {
            return List.find().catch(err => console.log(err));
        },
        getList: (parent, args) => {
            return List.findById(args.id).catch(err => console.log(err));
        }
    },
    Mutation: {
        createList: (parent, args) => {
            const newList = new List({


                name: args.name,
                description: args.description,
                price: args.price

                
            });
            return newList.save();
        },
        updateList: (parent, args) => {
            const list = List.find(list => list.id === args.id);
            if (!list) throw new Error('list not found');

            // This way, only the fields that are passed-in will be changed.
            if (typeof args.data.name === "string") list.name = args.data.name;
            if (typeof args.data.description === "string") list.description = args.data.description;
            if (typeof args.data.price === "double") list.price = args.data.price;
            return list;

            // return list.findByIdAndUpdate(id, { title: title, description: description, img: img, price: price });

        },
        deleteList: (parent, args) => {
            const listIndex = List.filter((list) => user.id !== args.id);
            if (listIndex === -1) throw new Error('list not found');

            const list = List.splice(listIndex, 1);
            return list[0];
        }
    }
}