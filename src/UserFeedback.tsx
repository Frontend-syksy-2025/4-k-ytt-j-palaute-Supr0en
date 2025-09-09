interface props {
    input: {
        name: string;
        message: string;
    };
}

function UserFeedback(props: props) {
    return (
        <>
            <h3>{props.input.name}</h3>
            <p>{props.input.message}</p>
        </>
    )
}

export default UserFeedback;