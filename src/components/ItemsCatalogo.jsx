import data from "../data";
import ItemCat from "./ItemCat";

const ItemsCatalogo = () => {
    return (
        <>
            {data.map((producto) => (
                <ItemCat key={producto.id} producto={producto} />
            ))}
        </>
    );
};

export default ItemsCatalogo;
