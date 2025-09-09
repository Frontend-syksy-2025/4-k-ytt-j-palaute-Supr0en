
interface props {
    name: string
    message: string
}

function UserFeedback(props: props) {
    const timeStamp = new Date()
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <p style={{fontSize:"10px"}}>{timeStamp.toDateString()} | {timeStamp.getHours().toString()}:{timeStamp.getMinutes().toString()}</p>
        </>
    )
}
export default UserFeedback;