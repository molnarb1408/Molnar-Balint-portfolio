# Green Sense Projekt Dokumentáció

## 1. Bevezetés
   - **Projekt leírása**: A Green Sense egy fenntarthatósági programokat támogató webes alkalmazás, amely cégek számára kínál testreszabott megoldásokat. A projekt célja, hogy környezetvédelmi kezdeményezések dokumentálását, kezelését és hatásának mérését könnyítse meg.
   - **Technológiák**: HTML, CSS, Bootstrap, JavaScript, PHP, SEO optimalizáció.

---

## 2. Frontend (Megjelenés és Felhasználói Interfész)

### 2.1 HTML Struktúra
   - **index.html**: A weboldal fő struktúrája és elemei. 
   - ![index.html szerkezetének bemutatása](images/index_structure.png)

### 2.2 Stílus (CSS és Bootstrap)
   - **CSS**: Egyedi stílusok a projekt arculatához igazítva. Tartalmazza a reszponzív dizájn megoldásait.
   - **Bootstrap**: A gyors és reszponzív felhasználói felülethez. Tartalmaz előre gyártott elemeket, például gombokat és űrlapokat.
   - ![UI elemek és elrendezés bemutatása](images/ui_layout.png)

### 2.3 JavaScript
   - **Interaktív elemek**: Dinamikus tartalom frissítése és űrlapok ellenőrzése.
   - **Animációk és eseménykezelők**: Az oldalon történő események figyelése, mint pl. a navigáció vagy adatbeviteli űrlapok.
   - ![Interaktív űrlap bemutatása](images/interactive_form.png)

---

## 3. Backend (Adatkezelés és PHP)

### 3.1 PHP szerkezet
   - **Adatfeldolgozás**: A PHP-kód kezeli az adatbevitelt, az adatbázissal való kapcsolatot, és válaszokat küld az ügyféloldalnak.
   - **Kódrészlet bemutatása (adatkezelés)**: Például egy űrlap beküldési folyamata, ahol a PHP összegyűjti az adatokat és feltölti az adatbázisba.
   - ```php
     <?php
     // Példa PHP kód az űrlap adatainak feldolgozására
     $name = $_POST['name'];
     // Kapcsolat az adatbázissal és az adatok mentése
     ?>
     ```

### 3.2 MySQL Integráció
   - **Adatbázis struktúra**: Táblák létrehozása és kapcsolatok felépítése a céges programok adatainak kezeléséhez.
   - **SQL lekérdezések**: Példák az adatlekérdezésre és módosításra a felhasználók által beküldött adatok alapján.

---

## 4. SEO Optimalizáció

   - **Alap SEO beállítások**: Kulcsszavak, meta leírások és címkék használata.
   - ![Forráskód SEO elemeinek kiemelésével](images/seo_elements.png): SEO beállítások bemutatása, például a meta címkék és kulcsszavak.
   - **Keresőoptimalizálási stratégiák**: A weboldal keresőmotorokban való jobb láthatósága érdekében használt megoldások, például gyors betöltési idő, optimalizált képek és reszponzív dizájn.

---

## 5. Zárszó

   - **Összegzés**: A Green Sense projekt kulcsfontosságú technológiai megoldásainak összefoglalása.
   - **Jövőbeli fejlesztési lehetőségek**: Bővítési tervek és további fejlesztési javaslatok.

---

