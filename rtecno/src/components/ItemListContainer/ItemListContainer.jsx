const ItemListContainer = (props) => {
    return (
        <div className="text-center">
            <br/>
            <h1>{props.greetings}</h1>
            <div className="container">
                <h3>Tienda de informática básica en ReactJS</h3>
                <img
                    src="./img/logo.jpg"
                    alt="Logo"
                    style={{ width: '200px', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default ItemListContainer;