import React from 'react';
import {Input, Select, TextArea} from './input';
import {OrderContainer, OrderForm, CollectForm} from "./OrderStyle";

const Order = () => {

    const products = [
        "",
        "Eclairs",
        "Trianon",
        "Tarte au citron",
        "Brézilienne",
        "Croissants"
    ];

    return (
        <OrderContainer id={"order"}>
            <OrderForm>
                <Select id="product" label="Produit:">
                    {products.map((product, index) => (
                        <option key={index}>{product}</option>
                    ))}
                </Select>
                <Input type="number" label="Nombre de personnes:" id="quantity" min="1" placeholder="2 personnes"/>
                <div/>
                <TextArea label="Autres informations:" id="infos" rows="2" cols="30" placeholder="Allérgies, inscription spéciale..." />
            </OrderForm>

            <CollectForm>
                <Input type="text" label="Nom:" id="name" placeholder="Madame Dupond"/>
                <Input type="text" label="Numéro de téléphone:" id="phone" />
                <Input type="date" label="Date de retrait:" id="date" />
                <Input type="time" label="Heure de retrait:" id="time" />
            </CollectForm>

        </OrderContainer>
    )
}

export default Order
