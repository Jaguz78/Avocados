/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const urlAPI = "https://platzi-avo.vercel.app";
const appNode = document.getElementById("app")

//API de internacionalización
const detallesYprecio = price =>{
    const formatPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
    return formatPrice;
}

// Async / Await
const jalarDatos = async url => {
    try{
    const response = await fetch(`${url}/api/avo`)
    const datajson = await response.json()
    const allData = []
    datajson.data.forEach(element => {
        // crear el div contenedor
        const container = document.createElement('div')
        container.className = 'container'

        // crear los atributos
        const image = document.createElement('img')
        image.src = `${urlAPI}${element.image}`
        const textContainer = document.createElement('div')
        textContainer.className = 'textContainer'
        const title = document.createElement('h2')
        title.innerText = element.name
        title.className = 'text-xl title'
        const price = document.createElement('p')
        price.innerText = detallesYprecio(element.price)
        price.className = 'price'

        // agregar los atributos al container
        textContainer.append(title, price)
        container.append(image, textContainer)

        // agregar el container al array con toda la Data
        allData.push(container)
    })
    
    // agregar toda la Data al body
    app.append(...allData)
    }
    catch{
        console.error("el request falló exitosamente")
    }
}
jalarDatos(urlAPI)

//promises
/* window.fetch(urlAPI)
    .then(response => response.json())
    .then(datajson => {
        datajson.data.forEach(element => {
            console.log(element.name)
        });
    }) */
