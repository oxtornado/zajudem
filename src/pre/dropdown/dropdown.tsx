import './dropdown.css';

function Dropdown() {
    return (
        <div className="container">
            <div className="dropdown-container">
                <div className="dropdown-item">
                    <h2 className="plus-symbol">+</h2>
                    <h2 className="dropdown-text">Reconocimiento facial</h2>
                </div>
                <div className="dropdown-item">
                    <h2 className="plus-symbol">+</h2>
                    <h2 className="dropdown-text">Asignación de ambientes</h2>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
