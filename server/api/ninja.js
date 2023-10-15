export default defineEventHandler(async(event) => {
        
    // const {age} = await useBody(event) , const {name}= useQuery(event)

        return {
            message: `hello , nuxt`
        }
})