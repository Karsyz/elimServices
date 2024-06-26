export default async (req) => {
    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
    try {
        const res = await fetch('http://elimservices.netlify.app/.netlify/functions/setVidListBlob', {
            method: 'GET', 
        });
        console.log('Update successful', res)
    } catch (error) {
        console.error('Call failed', error)
    }
}

export const config = {
    schedule: "10 18 * * *"
}