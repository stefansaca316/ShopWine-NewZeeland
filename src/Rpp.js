import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"


class Rpp extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                orders: [],
                currentItems: [],
                items: [
                    {
                    id: 1,
                    title: 'Vinul Syrah.',
                    img: 'scau.jpg',
                    desc: 'Syrah este un soi de struguri care produce vinuri roșii bogate și complexe, din regiunea Hawkes Bay.  Este originar din Noua Zeeland, Vinurile Syrah sunt adesea recunoscute pentru aromele lor intense de fructe negre, cum ar fi coacăzele, murele și căpșunile de pădure.',
                    category: 'chairs',
                    price: '17.99,'
                    },
                    {
                        id: 2,
                    title: 'Vinurile The Ned.',
                    img: 'Saltea.jpg',
                    desc: 'The Ned este un brand de vinuri din Noua Zeelandă, produse în regiunea Marlborough. Cunoscut pentru Sauvignon Blanc-ul său vibrant și alte soiuri, cum ar fi Pinot Noir și Pinot Gris. Vinurile The Ned sunt apreciate pentru aromele lor proaspete și bogate, obținând premii și recunoaștere internațională pentru calitatea lor.                    ',
                    category: 'sofa',
                    price: '19.99,'
                    },
                    {
                        id: 3,
                    title: 'Vinurile Chardonnay Hawke s Bay',
                    img: 'mas.jpg',
                    desc: 'Chardonnay-ul din regiunea Hawkes Bay din Noua Zeelandă este cunoscut pentru aromele sale bogate de fructe tropicale și fructe cu coajă albă, împreună cu note subtile de nucă și vanilie. Vinurile pot varia de la proaspete și fructate până la bogate și cremoase, datorită diferitelor tehnici de vinificație. Aceste Chardonnay-uri au adesea un potențial excelent de învechire și au primit recunoaștere internațională pentru calitatea lor',
                    category: 'tables',
                    price: '14.99,'
                    },
                    {
                        id: 4,
                    title: 'Pinot Gris Marlborough',
                    img: 'dula.jpeg',
                    desc: 'Pinot Gris-ul din regiunea Marlborough, Noua Zeelandă, este cunoscut pentru aromele sale proaspete și fructuoase, precum perele, merele și piersicile. Vinurile pot varia de la ușoare și catifelate până la mai pline și cremoase, oferind o gamă largă de stiluri pentru diferite preferințe. De obicei, sunt destinate consumului în tinerețe pentru a evidenția prospetimea și aromele fructate.',
                    category: 'light',
                    price: '49.99,'
                    },
                    {
                        id: 5,
                    title: 'Riesling-ul din Central Otago',
                    img: 'noptiera.webp',
                    desc: 'Riesling-ul din Central Otago, Noua Zeelandă, este apreciat pentru aromele sale intense de fructe citrice și subtile de fructe cu coajă albă, împreună cu arome minerale distincte. Vinurile variază de la seci și crocante până la dulci și bogate, cu o aciditate vibrantă care oferă prospețime și longevitate. Deși multe sunt destinate consumului în tinerețe, unele vinuri de calitate superioară au potențial modest de învechire.',
                    category: 'chairs',
                    price: '29.99,'
                    },
                    {
                        id: 6,
                    title: 'Albariño Gisborne',
                    img: 'noptiera.webr',
                    desc: 'Albariño-ul din regiunea Gisborne din Noua Zeelandă este cunoscut pentru aromele sale proaspete și vibrante de citrice și fructe cu sâmburi, cu o aciditate echilibrată și o textură catifelată. Deși este adesea consumat în tinerețe pentru a-și evidenția aromele proaspete, unele vinuri de calitate pot avea potențial modest de învechire',
                    category: 'chairs',
                    price: '14.99,'
                    }
                    
                ],
                showFullItem: false,
                fullItem: {}
            }
            this.state.currentItems = this.state.items
            this.addToOrder = this.addToOrder.bind(this)
            this.deleteOrder = this.deleteOrder.bind(this)
            this.chooseCategory = this.chooseCategory.bind(this)
            this.onShowItem = this.onShowItem.bind(this)
        }
    
    render () {
return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}  />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} items={this.state.fullItem}  />}
        <Footer />
    </div>
)
}
onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
    if(category === 'all') {
        this.setState({currentItems: this.state.items})
        return 
    }
     this.setState({
         currentItems: this.state.items.filter(el => el.category === category)
     })
}

deleteOrder(id){
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})

}
addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
        if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
}

}


export default Rpp