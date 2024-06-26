export default async (req) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    try {
        const res = await fetch('http://elimservices.netlify.app/.netlify/functions/setVidListBlob', {
            method: 'GET', 
        });
        console.log('Update call successful')
    } catch (error) {
        console.error('Update call failed', error)
    }
}

export const config = {
    schedule: "0 18 * * *"
}