import './dropdown.css';

function DropDown() {
    return (
        <div>
            <div className="drop-down">
                <button className="btn-drop">sort by</button>
                {/* <ul className='list-drop'>
                    <li>size</li>
                    <li>model</li>
                    <li>price</li>
                </ul> */}
            </div>
        </div>
    );
}

export default DropDown;
