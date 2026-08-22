# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: storefront.spec.ts >> selects a branch and builds the correct WhatsApp order URL
- Location: tests\storefront.spec.ts:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Pedir por WhatsApp' }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic "Información de compra" [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]: Pide por WhatsApp directo a tu sucursal
      - generic [ref=e5]: Retiro en tienda gratis en 6 ciudades
      - generic [ref=e6]: Pago seguro online o contraentrega
  - banner [ref=e7]:
    - generic [ref=e8]:
      - link "Oliwwi, ir al inicio" [ref=e9] [cursor=pointer]:
        - /url: https://www.oliwwi.com/
        - img "Oliwwi Makeup" [ref=e10]
      - navigation "Navegación principal" [ref=e11]:
        - link "Inicio" [ref=e12] [cursor=pointer]:
          - /url: https://www.oliwwi.com/
        - link "Tienda" [ref=e13] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/shop/
        - link "Ofertas" [ref=e14] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/ofertas/
        - link "Sucursales" [ref=e15] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/nuestras-tiendas/
        - link "Nosotros" [ref=e16] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/nosotros/
        - group [ref=e17]:
          - generic "Marcas" [ref=e18] [cursor=pointer]
      - generic [ref=e21]:
        - button "Ambato" [active] [ref=e23] [cursor=pointer]
        - link "Carrito de compras" [ref=e30] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/cart/
  - main [ref=e35]:
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]:
          - img "Maquillaje Oliwwi" [ref=e39]
          - generic [ref=e42]:
            - generic [ref=e43]: Maquillaje, skincare coreano y cuidado personal 100% original
            - heading "Todo lo que amas, más cerca de ti" [level=1] [ref=e44]
            - paragraph [ref=e45]: Maquillaje, skincare coreano y cuidado personal 100% original
            - generic [ref=e46]:
              - link "Comprar online" [ref=e47] [cursor=pointer]:
                - /url: https://tienda.oliwwi.com/shop/
              - link "Ver favoritos" [ref=e50] [cursor=pointer]:
                - /url: "#carousel-novedades"
        - generic [ref=e51]:
          - img "Skincare coreano" [ref=e52]
          - generic [ref=e55]:
            - generic [ref=e56]: K-beauty, sérums y rutinas para cada tipo de piel
            - heading "Tu skincare, sin vueltas" [level=1] [ref=e57]
            - paragraph [ref=e58]: K-beauty, sérums y rutinas para cada tipo de piel
            - generic [ref=e59]:
              - link "Explorar skincare" [ref=e60] [cursor=pointer]:
                - /url: https://tienda.oliwwi.com/shop/
              - link "Ver marcas" [ref=e63] [cursor=pointer]:
                - /url: "#marcas-heading"
        - generic [ref=e64]:
          - img "Ofertas Oliwwi" [ref=e65]
          - generic [ref=e68]:
            - generic [ref=e69]: Descuentos exclusivos en marcas que amas
            - heading "Tus favoritos, mejor precio" [level=1] [ref=e70]
            - paragraph [ref=e71]: Descuentos exclusivos en marcas que amas
            - generic [ref=e72]:
              - link "Ver ofertas" [ref=e73] [cursor=pointer]:
                - /url: https://tienda.oliwwi.com/ofertas/
              - link "Suscribirme" [ref=e76] [cursor=pointer]:
                - /url: "#newsletter-heading"
        - generic [ref=e77]:
          - img "Pedidos por WhatsApp" [ref=e78]
          - generic [ref=e81]:
            - generic [ref=e82]: Elige tu sucursal y tu pedido llega directo al chat
            - heading "Pide por WhatsApp, recoge en tienda" [level=1] [ref=e83]
            - paragraph [ref=e84]: Elige tu sucursal y tu pedido llega directo al chat
            - generic [ref=e85]:
              - link "Elegir sucursal" [ref=e86] [cursor=pointer]:
                - /url: "#sucursales"
              - link "Cómo funciona" [ref=e89] [cursor=pointer]:
                - /url: https://tienda.oliwwi.com/nosotros/
      - button "Slide anterior" [ref=e90] [cursor=pointer]
      - button "Slide siguiente" [ref=e93] [cursor=pointer]
      - tablist "Navegación del carrusel" [ref=e96]:
        - tab "Ir al slide 1" [selected] [ref=e97] [cursor=pointer]
        - tab "Ir al slide 2" [ref=e98] [cursor=pointer]
        - tab "Ir al slide 3" [ref=e99] [cursor=pointer]
        - tab "Ir al slide 4" [ref=e100] [cursor=pointer]
    - region "Beneficios de Oliwwi" [ref=e101]:
      - generic [ref=e103]:
        - article [ref=e104]:
          - heading "100% Originales" [level=3] [ref=e108]
          - paragraph [ref=e109]: Productos auténticos y seleccionados
        - article [ref=e110]:
          - heading "Pago Seguro" [level=3] [ref=e114]
          - paragraph [ref=e115]: Online o contraentrega
        - article [ref=e116]:
          - heading "Pedidos por WhatsApp" [level=3] [ref=e120]
          - paragraph [ref=e121]: Directo a tu sucursal favorita
        - article [ref=e122]:
          - heading "Precios de Mayoreo" [level=3] [ref=e126]
          - paragraph [ref=e127]: Descuentos por volumen
        - article [ref=e128]:
          - heading "Retiro en Tienda" [level=3] [ref=e134]
          - paragraph [ref=e135]: En 6 ciudades del Ecuador
    - generic "Marcas disponibles" [ref=e136]:
      - list [ref=e137]:
        - listitem [ref=e138]:
          - link [ref=e139] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/catrice/
            - img "Catrice" [ref=e140]
        - listitem [ref=e141]:
          - link [ref=e142] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/essence/
            - img "essence" [ref=e143]
        - listitem [ref=e144]:
          - link [ref=e145] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/city-color/
            - img "City Color" [ref=e146]
        - listitem [ref=e147]:
          - link [ref=e148] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/bodycology/
            - img "Bodycology" [ref=e149]
        - listitem [ref=e150]:
          - link [ref=e151] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/yuya-cosmeticos/
            - img "Yuya Cosméticos" [ref=e152]
        - listitem [ref=e153]:
          - link [ref=e154] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/catrice/
            - img "Catrice" [ref=e155]
        - listitem [ref=e156]:
          - link [ref=e157] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/essence/
            - img "essence" [ref=e158]
        - listitem [ref=e159]:
          - link [ref=e160] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/city-color/
            - img "City Color" [ref=e161]
        - listitem [ref=e162]:
          - link [ref=e163] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/bodycology/
            - img "Bodycology" [ref=e164]
        - listitem [ref=e165]:
          - link [ref=e166] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/yuya-cosmeticos/
            - img "Yuya Cosméticos" [ref=e167]
    - region [ref=e168]:
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172]: Compra por marca
            - heading "Un favorito para cada ritual." [level=2] [ref=e173]
          - link "Ver todas las marcas" [ref=e174] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/shop/
        - generic [ref=e175]:
          - link "Catrice Ver productos" [ref=e176] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/catrice/
            - img "Catrice" [ref=e177]
            - generic [ref=e178]: Ver productos
          - link "essence Ver productos" [ref=e179] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/essence/
            - img "essence" [ref=e180]
            - generic [ref=e181]: Ver productos
          - link "City Color Ver productos" [ref=e182] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/city-color/
            - img "City Color" [ref=e183]
            - generic [ref=e184]: Ver productos
          - link "Bodycology Ver productos" [ref=e185] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/bodycology/
            - img "Bodycology" [ref=e186]
            - generic [ref=e187]: Ver productos
          - link "Yuya Cosméticos Ver productos" [ref=e188] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/product-category/yuya-cosmeticos/
            - img "Yuya Cosméticos" [ref=e189]
            - generic [ref=e190]: Ver productos
    - region [ref=e191]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]:
            - generic [ref=e195]: Llegaron tus nuevos favoritos
            - heading "Novedades" [level=2] [ref=e196]
          - link "Ver catálogo completo" [ref=e197] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/shop/
        - generic [ref=e198]:
          - generic [ref=e199]:
            - article [ref=e200]:
              - generic [ref=e201]: "-20%"
              - img "Tinta labial larga duración USHAS" [ref=e203]
              - generic [ref=e204]:
                - button "Agregar Tinta labial larga duración USHAS al carrito" [ref=e205] [cursor=pointer]
                - button "Agregar Tinta labial larga duración USHAS a favoritos" [ref=e210] [cursor=pointer]
            - article [ref=e213]:
              - generic [ref=e214]: "-17%"
              - img "Desmaquillante de Rosas USHAS" [ref=e216]
              - generic [ref=e217]:
                - button "Agregar Desmaquillante de Rosas USHAS al carrito" [ref=e218] [cursor=pointer]
                - button "Agregar Desmaquillante de Rosas USHAS a favoritos" [ref=e223] [cursor=pointer]
            - article [ref=e226]:
              - generic [ref=e227]: "-12%"
              - img "345 Crema Hidratante (gel)" [ref=e229]
              - generic [ref=e230]:
                - button "Agregar 345 Crema Hidratante (gel) al carrito" [ref=e231] [cursor=pointer]
                - button "Agregar 345 Crema Hidratante (gel) a favoritos" [ref=e236] [cursor=pointer]
            - article [ref=e239]:
              - img "Crema 147" [ref=e241]
              - generic [ref=e242]:
                - button "Agregar Crema 147 al carrito" [ref=e243] [cursor=pointer]
                - button "Agregar Crema 147 a favoritos" [ref=e248] [cursor=pointer]
            - article [ref=e251]:
              - generic [ref=e252]: "-10%"
              - img "Protector Solar (arroz + probióticos)" [ref=e254]
              - generic [ref=e255]:
                - button "Agregar Protector Solar (arroz + probióticos) al carrito" [ref=e256] [cursor=pointer]
                - button "Agregar Protector Solar (arroz + probióticos) a favoritos" [ref=e261] [cursor=pointer]
            - article [ref=e264]:
              - img "Protector Solar Aqua Fresh (arroz + B5)" [ref=e266]
              - generic [ref=e267]:
                - button "Agregar Protector Solar Aqua Fresh (arroz + B5) al carrito" [ref=e268] [cursor=pointer]
                - button "Agregar Protector Solar Aqua Fresh (arroz + B5) a favoritos" [ref=e273] [cursor=pointer]
            - article [ref=e276]:
              - generic [ref=e277]: "-19%"
              - img "Manteca Corporal “Caca de Unicornio”" [ref=e279]
              - generic [ref=e280]:
                - button "Agregar Manteca Corporal “Caca de Unicornio” al carrito" [ref=e281] [cursor=pointer]
                - button "Agregar Manteca Corporal “Caca de Unicornio” a favoritos" [ref=e286] [cursor=pointer]
            - article [ref=e289]:
              - generic [ref=e290]: "-14%"
              - img "Kit Shampoo + Acondicionador de Cebolla" [ref=e292]
              - generic [ref=e293]:
                - button "Agregar Kit Shampoo + Acondicionador de Cebolla al carrito" [ref=e294] [cursor=pointer]
                - button "Agregar Kit Shampoo + Acondicionador de Cebolla a favoritos" [ref=e299] [cursor=pointer]
          - button "Scrollear a la izquierda" [ref=e302] [cursor=pointer]
          - button "Scrollear a la derecha" [ref=e305] [cursor=pointer]
    - region [ref=e308]:
      - generic [ref=e309]:
        - generic [ref=e310]:
          - generic [ref=e311]:
            - generic [ref=e312]: Descuentos exclusivos por tiempo limitado
            - heading "Ofertas de la semana" [level=2] [ref=e313]
          - link "Ver todas las ofertas" [ref=e314] [cursor=pointer]:
            - /url: https://tienda.oliwwi.com/ofertas/
        - generic [ref=e315]:
          - generic [ref=e316]:
            - article [ref=e317]:
              - generic [ref=e318]: "-20%"
              - img "Tinta labial larga duración USHAS" [ref=e320]
              - generic [ref=e321]:
                - button "Agregar Tinta labial larga duración USHAS al carrito" [ref=e322] [cursor=pointer]
                - button "Agregar Tinta labial larga duración USHAS a favoritos" [ref=e327] [cursor=pointer]
            - article [ref=e330]:
              - generic [ref=e331]: "-17%"
              - img "Desmaquillante de Rosas USHAS" [ref=e333]
              - generic [ref=e334]:
                - button "Agregar Desmaquillante de Rosas USHAS al carrito" [ref=e335] [cursor=pointer]
                - button "Agregar Desmaquillante de Rosas USHAS a favoritos" [ref=e340] [cursor=pointer]
            - article [ref=e343]:
              - generic [ref=e344]: "-12%"
              - img "345 Crema Hidratante (gel)" [ref=e346]
              - generic [ref=e347]:
                - button "Agregar 345 Crema Hidratante (gel) al carrito" [ref=e348] [cursor=pointer]
                - button "Agregar 345 Crema Hidratante (gel) a favoritos" [ref=e353] [cursor=pointer]
            - article [ref=e356]:
              - generic [ref=e357]: "-10%"
              - img "Protector Solar (arroz + probióticos)" [ref=e359]
              - generic [ref=e360]:
                - button "Agregar Protector Solar (arroz + probióticos) al carrito" [ref=e361] [cursor=pointer]
                - button "Agregar Protector Solar (arroz + probióticos) a favoritos" [ref=e366] [cursor=pointer]
            - article [ref=e369]:
              - generic [ref=e370]: "-19%"
              - img "Manteca Corporal “Caca de Unicornio”" [ref=e372]
              - generic [ref=e373]:
                - button "Agregar Manteca Corporal “Caca de Unicornio” al carrito" [ref=e374] [cursor=pointer]
                - button "Agregar Manteca Corporal “Caca de Unicornio” a favoritos" [ref=e379] [cursor=pointer]
            - article [ref=e382]:
              - generic [ref=e383]: "-14%"
              - img "Kit Shampoo + Acondicionador de Cebolla" [ref=e385]
              - generic [ref=e386]:
                - button "Agregar Kit Shampoo + Acondicionador de Cebolla al carrito" [ref=e387] [cursor=pointer]
                - button "Agregar Kit Shampoo + Acondicionador de Cebolla a favoritos" [ref=e392] [cursor=pointer]
          - button "Scrollear a la izquierda" [ref=e395] [cursor=pointer]
          - button "Scrollear a la derecha" [ref=e398] [cursor=pointer]
    - generic [ref=e401]:
      - img "Skincare sin género" [ref=e402]
      - generic [ref=e405]:
        - heading "El skincare no tiene género" [level=2] [ref=e406]
        - paragraph [ref=e407]: Descubre tu rutina ideal con productos que cuidan tu piel
        - link "Encuentra tu rutina ideal aquí" [ref=e408] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/shop/
    - region [ref=e411]:
      - generic [ref=e412]:
        - generic [ref=e413]:
          - generic [ref=e414]: Pasate a saludar
          - heading "Nuestras Tiendas" [level=2] [ref=e415]
          - paragraph [ref=e416]: Seis ciudades, un solo equipo. Elige tu sucursal y tu pedido llega al WhatsApp de esa tienda.
        - generic [ref=e417]:
          - article [ref=e418]:
            - generic [ref=e419]: Disponible
            - heading "Ambato" [level=3] [ref=e426]
            - paragraph [ref=e427]: Atahualpa y los Shirrys (junto a las 2 gasolineras)
            - paragraph [ref=e428]: Lun–Sáb 9:30am–6pm · Domingo cerrado
            - generic [ref=e429]:
              - link "096 792 8652" [ref=e430] [cursor=pointer]:
                - /url: https://wa.me/593967928652
              - generic [ref=e434]: Elegir
          - article [ref=e437]:
            - generic [ref=e438]: Disponible
            - heading "Otavalo" [level=3] [ref=e445]
            - paragraph [ref=e446]: Calle Bolívar y Juan Montalvo (frente al parque Bolívar)
            - paragraph [ref=e447]: Lun–Sáb 8am–6:30pm · Domingo 9am–5pm
            - generic [ref=e448]:
              - link "099 327 8588" [ref=e449] [cursor=pointer]:
                - /url: https://wa.me/593993278588
              - generic [ref=e453]: Elegir
          - article [ref=e456]:
            - generic [ref=e457]: Disponible
            - heading "Cuenca" [level=3] [ref=e464]
            - paragraph [ref=e465]: Presidente Córdova entre Luis Cordero y Benigno Malo 8-41 (frente al hotel Río Piedra)
            - paragraph [ref=e466]: Lun–Sáb 9am–6:30pm · Domingo 10am–5pm
            - generic [ref=e467]:
              - link "099 020 1423" [ref=e468] [cursor=pointer]:
                - /url: https://wa.me/593990201423
              - generic [ref=e472]: Elegir
          - article [ref=e475]:
            - generic [ref=e476]: Disponible
            - heading "Ibarra" [level=3] [ref=e483]
            - paragraph [ref=e484]: Calle Colón y José Joaquín de Olmedo (diagonal a Todo x $1)
            - paragraph [ref=e485]: Lun–Sáb 9am–6:30pm · Domingo 9am–5pm
            - generic [ref=e486]:
              - link "095 923 9067" [ref=e487] [cursor=pointer]:
                - /url: https://wa.me/593959239067
              - generic [ref=e491]: Elegir
          - article [ref=e494]:
            - generic [ref=e495]: Disponible
            - heading "Riobamba" [level=3] [ref=e502]
            - paragraph [ref=e503]: Gaspar de Villarroel y Juan de la Valle
            - paragraph [ref=e504]: Lun–Sáb 9am–7:30pm · Domingo sin atención
            - generic [ref=e505]:
              - link "093 954 2412" [ref=e506] [cursor=pointer]:
                - /url: https://wa.me/593939542412
              - generic [ref=e510]: Elegir
          - article [ref=e513]:
            - generic [ref=e514]: Disponible
            - heading "Latacunga" [level=3] [ref=e521]
            - paragraph [ref=e522]: "[pendiente]"
            - paragraph [ref=e523]: "[pendiente]"
            - generic [ref=e524]:
              - link "098 440 3580" [ref=e525] [cursor=pointer]:
                - /url: https://wa.me/593984403580
              - generic [ref=e529]: Elegir
        - link "Ver mapa completo" [ref=e533] [cursor=pointer]:
          - /url: /sucursales
    - generic [ref=e534]:
      - img "Ofertas de temporada" [ref=e535]
      - generic [ref=e538]:
        - heading "Tus favoritos, mejor precio" [level=2] [ref=e539]
        - paragraph [ref=e540]: Descuentos exclusivos en marcas que amas. Solo por tiempo limitado.
        - link "Ver todas las ofertas" [ref=e541] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/ofertas/
    - region [ref=e544]:
      - generic [ref=e545]:
        - generic [ref=e546]:
          - generic [ref=e547]: "@oliwwi_ec"
          - heading "La comunidad Oliwwi" [level=2] [ref=e548]
          - paragraph [ref=e549]: Novedades, promociones y mucho amor. Síguenos para descubrir lanzamientos, fotos y videos de nuestros productos.
        - generic [ref=e550]:
          - link [ref=e551] [cursor=pointer]:
            - /url: https://www.instagram.com/oliwwi_ec/
            - generic [ref=e553]:
              - generic [ref=e554]: Instagram
              - heading "@oliwwi_ec" [level=3] [ref=e560]
              - paragraph [ref=e561]: Fotos, reels y novedades
          - link [ref=e562] [cursor=pointer]:
            - /url: https://www.tiktok.com/@oliwwi_makeup
            - generic [ref=e564]:
              - generic [ref=e565]: TikTok
              - heading "@oliwwi_makeup" [level=3] [ref=e568]
              - paragraph [ref=e569]: Videos y tendencias
          - link [ref=e570] [cursor=pointer]:
            - /url: https://t.me/oliwwi_makeup
            - generic [ref=e572]:
              - generic [ref=e573]: Telegram
              - heading "@oliwwi_makeup" [level=3] [ref=e576]
              - paragraph [ref=e577]: Canal y comunidad
        - generic [ref=e578]:
          - paragraph [ref=e579]: Feed de Instagram @oliwwi_ec
          - list "Posts de Instagram" [ref=e580]:
            - listitem [ref=e581] [cursor=pointer]:
              - img "Post de Instagram 1" [ref=e582]
            - listitem [ref=e586] [cursor=pointer]:
              - img "Post de Instagram 2" [ref=e587]
            - listitem [ref=e591] [cursor=pointer]:
              - img "Post de Instagram 3" [ref=e592]
            - listitem [ref=e596] [cursor=pointer]:
              - img "Post de Instagram 4" [ref=e597]
            - listitem [ref=e601] [cursor=pointer]:
              - img "Post de Instagram 5" [ref=e602]
            - listitem [ref=e606] [cursor=pointer]:
              - img "Post de Instagram 6" [ref=e607]
    - region [ref=e611]:
      - generic [ref=e612]:
        - generic [ref=e613]: ¡No te pierdas lo nuevo!
        - heading "Suscríbete y sé la primera en enterarte" [level=2] [ref=e616]
        - paragraph [ref=e617]: Novedades, ofertas exclusivas y tips de belleza directo a tu bandeja. Sin spam, solo amor.
        - generic [ref=e618]:
          - generic [ref=e619]: Tu email
          - textbox "Tu email" [ref=e620]:
            - /placeholder: tu@email.com
          - button "Suscribirme" [ref=e621] [cursor=pointer]
        - paragraph [ref=e622]:
          - text: Al suscribirte aceptas nuestra
          - link "Política de Privacidad" [ref=e623] [cursor=pointer]:
            - /url: /politicas/privacidad
          - text: .
  - contentinfo [ref=e624]:
    - generic [ref=e625]:
      - generic [ref=e626]:
        - link "Oliwwi, ir al inicio" [ref=e627] [cursor=pointer]:
          - /url: http://localhost:4321/
          - img "Oliwwi Makeup" [ref=e628]
        - paragraph [ref=e629]: Maquillaje, skincare coreano y cuidado personal 100% original. Elige tu sucursal Oliwwi y pide por WhatsApp.
        - paragraph [ref=e630]: Be you, Be beautiful.
      - navigation "Navegación principal" [ref=e631]:
        - heading "Explora" [level=2] [ref=e632]
        - list [ref=e633]:
          - listitem [ref=e634]:
            - link "Inicio" [ref=e635] [cursor=pointer]:
              - /url: https://www.oliwwi.com/
          - listitem [ref=e636]:
            - link "Tienda" [ref=e637] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/shop/
          - listitem [ref=e638]:
            - link "Ofertas" [ref=e639] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/ofertas/
          - listitem [ref=e640]:
            - link "Sucursales" [ref=e641] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/nuestras-tiendas/
          - listitem [ref=e642]:
            - link "Nosotros" [ref=e643] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/nosotros/
      - navigation "Ayuda y soporte" [ref=e644]:
        - heading "Ayuda" [level=2] [ref=e645]
        - list [ref=e646]:
          - listitem [ref=e647]:
            - link "Preguntas Frecuentes" [ref=e648] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/faq/
          - listitem [ref=e649]:
            - link "Envíos y Retiros" [ref=e650] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/envios/
          - listitem [ref=e651]:
            - link "Métodos de Pago" [ref=e652] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/pagos/
          - listitem [ref=e653]:
            - link "Precios de Mayoreo" [ref=e654] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/mayoreo/
          - listitem [ref=e655]:
            - link "Contáctanos" [ref=e656] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/contacto/
      - navigation "Información legal" [ref=e657]:
        - heading "Legal" [level=2] [ref=e658]
        - list [ref=e659]:
          - listitem [ref=e660]:
            - link "Política de Privacidad" [ref=e661] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/politicas/privacidad/
          - listitem [ref=e662]:
            - link "Términos y Condiciones" [ref=e663] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/politicas/terminos/
          - listitem [ref=e664]:
            - link "Devoluciones" [ref=e665] [cursor=pointer]:
              - /url: https://tienda.oliwwi.com/politicas/devoluciones/
      - generic [ref=e666]:
        - heading "Comunidad" [level=2] [ref=e667]
        - generic [ref=e668]:
          - link "Instagram" [ref=e669] [cursor=pointer]:
            - /url: https://instagram.com/oliwwi_ec
          - link "TikTok" [ref=e676] [cursor=pointer]:
            - /url: https://tiktok.com/@oliwwi_makeup
          - link "Facebook" [ref=e680] [cursor=pointer]:
            - /url: https://facebook.com/oliwwi
    - generic [ref=e685]:
      - paragraph [ref=e686]: © 2026 Oliwwi · Ecuador
      - generic [ref=e687]:
        - link "Privacidad" [ref=e688] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/politicas/privacidad/
        - link "Términos" [ref=e689] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/politicas/terminos/
        - link "Cookies" [ref=e690] [cursor=pointer]:
          - /url: https://tienda.oliwwi.com/politicas/cookies/
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | async function waitForIslands(page: import('@playwright/test').Page) {
  4  |   await page.waitForFunction(() => [...document.querySelectorAll('astro-island')].every((island) => !island.hasAttribute('ssr')));
  5  | }
  6  | 
  7  | test('selects a branch and builds the correct WhatsApp order URL', async ({ page }) => {
  8  |   await page.goto('/');
  9  |   await waitForIslands(page);
  10 |   await page.getByRole('button', { name: /elige tu sucursal/i }).click();
  11 |   await page.getByRole('dialog').getByRole('button', { name: /Ambato/ }).click();
  12 |   await expect(page.getByRole('button', { name: /Ambato/ }).first()).toBeVisible();
  13 | 
  14 |   await page.evaluate(() => {
  15 |     (window as Window & { __openedUrl?: string }).__openedUrl = undefined;
  16 |     window.open = ((url?: string | URL) => {
  17 |       (window as Window & { __openedUrl?: string }).__openedUrl = String(url);
  18 |       return null;
  19 |     }) as typeof window.open;
  20 |   });
> 21 |   await page.getByRole('button', { name: 'Pedir por WhatsApp' }).first().click();
     |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |   const openedUrl = await page.evaluate(() => (window as Window & { __openedUrl?: string }).__openedUrl ?? '');
  23 |   expect(openedUrl).toContain('wa.me/593967928652');
  24 |   expect(decodeURIComponent(openedUrl)).toContain('Tinta labial larga duración USHAS');
  25 | });
  26 | 
  27 | test('asks for a branch when none has been selected and Latacunga is available', async ({ page }) => {
  28 |   await page.goto('/catalogo');
  29 |   await page.evaluate(() => window.localStorage.clear());
  30 |   await page.reload();
  31 |   await waitForIslands(page);
  32 |   await page.evaluate(() => {
  33 |     (window as Window & { __openedUrl?: string }).__openedUrl = undefined;
  34 |     window.open = ((url?: string | URL) => {
  35 |       (window as Window & { __openedUrl?: string }).__openedUrl = String(url);
  36 |       return null;
  37 |     }) as typeof window.open;
  38 |   });
  39 |   await page.getByRole('button', { name: 'Pedir por WhatsApp' }).first().click();
  40 |   await expect(page.getByRole('heading', { name: 'Elige dónde pedir' })).toBeVisible();
  41 |   await page.getByRole('dialog').getByRole('button', { name: /Latacunga/ }).click();
  42 |   const openedUrl = await page.evaluate(() => (window as Window & { __openedUrl?: string }).__openedUrl ?? '');
  43 |   expect(openedUrl).toContain('wa.me/593984403580');
  44 | });
  45 | 
  46 | test('filters the catalog and does not overflow on mobile', async ({ page }) => {
  47 |   await page.setViewportSize({ width: 390, height: 844 });
  48 |   await page.goto('/catalogo');
  49 |   await waitForIslands(page);
  50 |   await expect(page.locator('main article')).toHaveCount(8);
  51 |   await page.getByRole('button', { name: 'Skincare', exact: true }).click();
  52 |   await expect(page.locator('main article')).toHaveCount(1);
  53 |   const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  54 |   expect(hasOverflow).toBe(false);
  55 | });
  56 | 
```