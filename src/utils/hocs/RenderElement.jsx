const RenderElement = ({ children, data }) => {
    return (
        <>
            {data ? children : false}
        </>
    );
};

export default RenderElement;