const jsonserver=require('json-server')


const mpServer=jsonserver.create()



const middileware=jsonserver.defaults()

const router=jsonserver.router('db.json')

mpServer.use(middileware)
mpServer.use(router)



const PORT=8852 || process.env.PORT


mpServer.listen(PORT,()=>{
    console.log("Server running at port:"+PORT);
    
})