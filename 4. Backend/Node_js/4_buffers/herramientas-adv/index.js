const puppeteer = require("puppeteer");

(async () => {
  //Codigo...
  console.log("Lanzando navegador");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://github.com/javierportillar");

  var title1 = await page.evaluate(() => {
    // page.evaluate ejecuta un script (lo que se quiera) dentro de la pag
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML
  });

  console.log(title1);
  // const browser= await puppeteer.launch();
  console.log("Cerrando navegador");
  // browser.close()
  console.log("Navegador cerrado");
})();
