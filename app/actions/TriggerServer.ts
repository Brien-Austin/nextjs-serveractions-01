"use server"
export default async function TriggerServer(message: string) {
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve({
           message:message
       }),2000)
    })
    console.log(response);
    return response;    
}