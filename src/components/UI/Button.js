function Button(props) {
    // let attrs = {
    //     ...props,
    //     type: props.type ?? 'button',
    // };

    return (
        <>
            <button type={props.type} className={'btn btn-circle ' + props.className} title={props.title}>
                <i className={props.icon}></i>
            </button>
        </>
    );
}

export default Button;
