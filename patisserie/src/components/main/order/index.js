import React from 'react';
import {Input, Select, TextArea} from './input';
import {OrderContainer, OrderForm, CollectForm, ButtonContainer, OrderButton, Legend} from "./OrderStyle";

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
            <Legend>Commande:</Legend>
            <OrderForm>
                <Select id="product" label="Produit:">
                    {products.map((product, index) => (
                        <option key={index}>{product}</option>
                    ))}
                </Select>
                <Input type="number" label="Personnes:" id="quantity" min="1" placeholder="2 personnes"/>
                <div/>
                <TextArea label="Informations:" id="infos" rows="2" cols="30" placeholder="Allérgies, inscription spéciale..." />
            </OrderForm>

            <Legend>Retrait:</Legend>
            <CollectForm>
                <Input type="text" label="Nom:" id="name" placeholder="Mme Dupond"/>
                <Input type="text" label="Téléphone:" id="phone" placeholder="0479614857"/>
                <Input type="date" label="Date:" id="date" />
                <Input type="time" label="Heure:" id="time" />
            </CollectForm>

            <ButtonContainer>
                <OrderButton>Envoyer</OrderButton>
            </ButtonContainer>

        </OrderContainer>
    )
}

export default Order
