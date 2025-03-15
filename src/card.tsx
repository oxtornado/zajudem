import '../src/card.css'

function card() {
    return (
        <>
        <div className="card">
            <div className="textCard">
                <h2>Facil</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, error!</p>
            </div>
            <div className="cardImage">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pointed computer" />    
            </div>
        </div>
        <div className="card">
            <div className="cardImage">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="clasroom" />    
            </div>            
            <div className="textCardTwo">
                <h2>Facil</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, error!</p>
            </div>
        </div>


        </>
    )
}

export default card;