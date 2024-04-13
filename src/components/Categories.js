import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Toate',
                    
                },
                {
                    key: 'chairs',
                    name: 'Syrach',
                    
                },
                {
                    key: 'tables',
                    name: 'The Ned',
                    
                },
                {
                    key: 'sofa',
                    name: 'Hawke s bay',
                    
                },
                {
                    key: 'light',
                    name: 'Pinot Gris Marlborough',
                    
                },
                {
                    key: 'light',
                    name: 'Riesling-ul din centrul Otago',
                    
                },
                {
                    key: 'light',
                    name: 'Albarino Gisborne ',
                    
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
        <h1 className='oleg'>Vinificatia ale Noii Zeelande la general:</h1>
        <h3 className='oleg1'>
       1.Regiuni viticole pitorești: Noua Zeelandă este binecunoscută pentru varietatea și frumusețea regiunilor sale viticole, printre care Marlborough, Central Otago, Hawke's Bay și Martinborough. Fiecare dintre aceste regiuni oferă un cadru unic, în care strugurii sunt îngrijiți cu pasiune și talent. <br />

2.Climat subtil și variat: Clima Noua Zeelandă este un veritabil dans al subtilității, oferind de la zone temperate până la cele reci, o gamă largă de condiții potrivite pentru cultivarea strugurilor. Această diversitate climatică permite obținerea unor vinuri cu arome și profiluri gustative bogate și variate. <br />

3.Soiuri de struguri de renume mondial: În Noua Zeelandă, strugurii sunt ca niște bijuterii prețioase în cadrul peisajului viticol. Celebrele soiuri precum Sauvignon Blanc, Pinot Noir, Chardonnay și Riesling își găsesc aici un teritoriu privilegiat, în care să se exprime în toată splendoarea lor aromatică și gustativă. <br />

4.Artă și tehnologie în vinificație: În atelierele vinicole din Noua Zeelandă, arta și tehnologia se împletesc armonios pentru a da naștere vinurilor de excepție. De la fermentația controlată în vase de otel inoxidabil, până la maturarea delicată în butoaie de stejar, fiecare etapă a procesului de vinificație este îndrumată de mâini pricepute și inimile pasionate. <br />

5.Exporturi care încântă lumea: Vinurile din Noua Zeelandă își găsesc calea către inimile și palaturile iubitorilor de vin din întreaga lume. Exporturile sunt sinonime cu calitatea și rafinamentul, iar numele regiunii Marlborough devine un adevărat ambasador al excelentului Sauvignon Blanc. <br />

6.Angajamentul pentru sustenabilitate: În Noua Zeelandă, păstrarea echilibrului cu natura este o filozofie de viață, reflectată și în industria viticolă. De la practici viticole responsabile, până la utilizarea energiei regenerabile și protecția biodiversității, angajamentul pentru sustenabilitate este în centrul fiecărei acțiuni. br

7.Pasiune transmisă din generație în generație: În spatele fiecărui pahar de vin din Noua Zeelandă stă o poveste de pasiune și tradiție, transmisă cu grijă și respect de la o generație la alta. Fiecare strop de vin reprezintă o mărturie a muncii grele și a devotamentului față de meșteșugul viticol. <br />

8.Arome care încântă simțurile: În lumea vinurilor din Noua Zeelandă, fiecare pahar este o călătorie olfactivă și gustativă, plină de arome și nuanțe surprinzătoare. De la explozia fructelor tropicale în Sauvignon Blanc, până la subtilitățile senzuale ale Pinot Noir-ului, fiecare vin este o poveste în sine. <br />

9.Patrimoniu cultural și gastronomic: Vinul este mai mult decât o băutură în Noua Zeelandă, este o expresie a identității culturale și gastronomice a țării. Festivaluri, târguri și evenimente dedicate vinului sunt locuri de întâlnire pentru iubitorii de frumos și gustos. <br />

10.O călătorie spre excelență: În Noua Zeelandă, vinul nu este doar o băutură, este o călătorie spre excelență și frumusețe. Fiecare strop de vin este rezultatul unei călătorii pline de muncă, pasiune și talent, care încântă și inspiră în același timp. <br />
        </h3>
      </div>
    )
  }
}

export default Categories