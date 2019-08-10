const server = require('./server');

const port =  process.env.PORT || 4000;
//did .evn file and yarn add dotenv and process.env.PORT not working??
/*did not create a data folder and did knex migrate:make in the root directory instead of data. it created the migrate directory in the root and did not look in the data that was created later and cut and pasted and configured into it tried to knex migrate:latest
 and got error that cant find webapi-11-challenge/migrations even though I configured the knex.dev object to be in that directory?
what is the point of that dev object then??? then I knex seed:make cars IN THE DATA DIRECTORY and it proceeded to make it in the root where the migration directory was!!*/
server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
//for PM:

//post not working, not sure about part 2 of directions on schema specs