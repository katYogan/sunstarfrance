import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { Hero } from './models/hero';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar } from './models/navbar';
import { SliderComponent } from './slider/slider.component';
import { Slider } from './models/slider';
import { Section } from './models/section';
import { SectionComponent } from './section/section.component';
import {SubsectionComponent} from './subsection/subsection.component';
import { Subsection } from './models/subsection';
import { FormComponent } from './form/form.component';
import { Form } from './models/form';
import { LinksComponent } from './links/links.component';
import { Links } from './models/links';
import { FooterComponent } from './footer/footer.component';
import { Footer } from './models/footer';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel } from './models/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FaceSnapComponent,
    HeroComponent,
    NavbarComponent,
    SliderComponent,
    SectionComponent,
    SubsectionComponent,
    FormComponent,
    LinksComponent,
    FooterComponent,
    CarouselComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  myHero!: Hero;

  myNavbar!: Navbar;

  mySlider!: Slider;

  sections: Section[] = [];

  subsections : Subsection[] = [];

  forms: Form[] = [];

  links: Links[] = [];

  footer!: Footer;

  carousel!: Carousel;

  

  ngOnInit(): void {
    // AOS.init({
    //   duration: 600, // Global duration for animations
    //   once: false, // Whether animation should happen only once - while scrolling down
    // });

    this.mySnap = new FaceSnap(
      "TITRE",
      "Face Snap",
      "https://service4.haussmann-patrimoine.fr/ysi/Enveloppe_0118c353-10d3-4caa-a0d0-184c0010244e.webp",
      new Date(),
      10
    );
  
    this.myOtherSnap = new FaceSnap(
      "TITRE2222",
      "Face Snap22222",
      "https://service4.haussmann-patrimoine.fr/ysi/Enveloppe_0118c353-10d3-4caa-a0d0-184c0010244e.webp",
      new Date(),
      5
    );

    this.myNavbar = new Navbar(
      "Les Granges",
      "assets/img/perseus.png",
      [
        { id: "about", name: "About" },
        { id: "gite", name: "Gite" },
        { id: "astronomy", name: "Astronomy" },
        { id: "cycling", name: "Cycling" },
        { id: "climbing", name: "Climbing" },
        { id: "localarea", name: "Local area" },
        { id: "gettinghere", name: "Getting here" },
        { id: "booking", name: "Booking / Pricing" },
        { id: "contact", name: "Contact" },
        { id: "links", name: "Links" }
      ]
    );

    this.footer = new Footer(
      "Sun Star France",
      "assets/img/perseus.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      [
        { id: "about", name: "About" },
        { id: "gite", name: "Gite" },
        { id: "astronomy", name: "Astronomy" },
        { id: "cycling", name: "Cycling" },
        { id: "climbing", name: "Climbing" },
        { id: "localarea", name: "Local area" },
        { id: "gettinghere", name: "Getting here" },
        { id: "booking", name: "Booking / Pricing" },
        { id: "contact", name: "Contact" },
        { id: "links", name: "Links" }
      ]
    );
  
    this.myHero = new Hero(
      "home",
      "Les Granges",
      "Sun & Stars in Southern France",
      "assets/img/olly/ORION.jpg",
      [
        { id: "about", name: "About" },
        { id: "gite", name: "Gite" },
        { id: "astronomy", name: "Astronomy" },
        { id: "cycling", name: "Cycling" },
        { id: "climbing", name: "Climbing" },
        { id: "local-area", name: "Local area" },
        { id: "gettinghere", name: "Getting here" },
        { id: "booking", name: "Booking / Pricing" },
        { id: "contact", name: "Contact" },
        { id: "links", name: "Links" }
      ],
      [
        "assets/img/olly/COMET-HARTLEY-AND-THE-HEART-AND-SOUL_400.jpg",
        "assets/img/olly/ULTIMATEVERSIONM42COMP_400.jpg",
        "assets/img/olly/M33_400.jpg",
        "assets/img/olly/ORION-CONSTELLATION_400.jpg",
        "assets/img/olly/COMET-HARTLEY-AND-THE-HEART-AND-SOUL_400.jpg",
      ]
    );

    this.mySlider = new Slider(
      "Slider",
      "Face Snap",
      [
        "https://www.sunstarfrance.com/images/photos/house/lesGranges_400.jpg",
        "https://www.sunstarfrance.com/images/photos/house/Adrian%20Drone.jpg",
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg",
      ]

    );

    this.sections = [
      new Section(
        "about",
        "About Les Granges",
        "Les Granges is a traditional Provencale farmhouse.",
        `It is available for rent as a complete Gite or you can stay by booking our gite-share option as explained on the Booking/Pricing page. In either case, an excellent evening meal catering service is available if you wish, though of course if you book the Gite you can self-cater in the traditional kitchen.</br></br>
        The house faces south with stunning views onto farmland and the rugged virgin hillsides beyond.</br>
        There isn’t a road or a building to intrude on this extraordinary view yet the supermarkets are less than half an hour away and Orpierre has lively summer bars, baker and shop at under five miles.</br></br>
        We are astronomy specialists offering first class observatories for visual observing and deep sky CCD imaging. Astrophotographer Olly Penrice can introduce you to the night sky and provide all the help you need to capture and process excellent images.</br></br>
        Olly Penrice is fluent in English and French.`,
        [
          {url :"assets/img/olly/AdrianDrone.jpg", title: "Les Granges", subtitle: "A beautiful farmhouse" },
          {url :"assets/img/olly/lesGranges_400.jpg", title: "Les Granges", subtitle: "Drone image by guest Adrian Catterall showing Les Granges and its observatories" },
        ],
      ),
      new Section(
        "gite",
        "Gite : Les Granges",
        "Les Granges accommodation: </br> The four main rooms have wonderful south facing views onto farmland and wooded hills beyond.",
        `Square lounge with woodburning stove, three armchairs and triple sofa/sofabed. There's a large flatscreen TV/DVD and CD player.</br>
        Square dining kitchen with Godin woodburning range, modern gas/electric cooker, fridge/freezer, microwave, double sink and dishwasher.</br>
        Bedroom 1 has three single beds, armchair, upright chair and writing table, small woodburning stove and built-in wardrobe.</br>
        Bedroom 2, slightly smaller, has two single beds, armchair and upright chair.</br>
        There are two bathrooms, both with WC and handbasin. One has a shower, the other a bath.</br>
        Outside there is a south facing terrace with large dining table, sunshade, a covered Weber gas barbecue and plenty of upright and reclining garden chairs.</br>
        We also have a traditional pizza oven which we can fire up if you wish!`,
        [
          {url: "assets/img/olly/fireplace_sm.jpg", title: "Les Granges", subtitle: "Cosy living room" },
          {url: "assets/img/olly/kitchen_range.jpg", title: "Les Granges", subtitle: "Godin woodburning range" },
          {url: "assets/img/olly/viewSouth_400.jpg", title: "Les Granges", subtitle: "View to the South" },
          {url: "assets/img/olly/outside_etoile.jpg", title: "Les Granges", subtitle: "Views over Etoile" },
        ],
      ),
      new Section(
        "astronomy",
        "Astronomy at Les Granges",
        "Top equipment at a top site.",
        `<b>Hello and welcome.</b> I'm Olly Penrice, astronomy enthusiast and deep sky astrophotographer. I'll be at your service during your stay.</br>
        Les Granges has a <b>truly dark site</b> with a best ever Sky Quality Meter reading of an outstanding 22.05. This will be very hard to beat anywhere in mainland Europe. We enjoy an elevated position at 900 metres/3000 feet.</br>
        Let me show you round the observatories. If you are beginner, don't worry. In a nutshell we have excellent equipment and I'll help you to operate it very successfully.  Firstly our visual observing instruments...</br></br>
        '<b>Sir Isaac.</b>'  A 20 inch F4.1 classical Dobsonian with Telrad finder and 60mm finderscope. Big, simple and with a light grasp of at least 5000 times that of the unaided eye.</br></br>
        <b>The Alan Longstaff Telescope.</b> A 14 inch fork-mounted Meade LX200 Schmidt Casseagrain. It has a precision Go To function making it easy for complete beginners to find the objects of their choice simply by typing a catalogue number into the handset.</br></br>
        A good collection of  premium TeleVue eyepieces ensures that these telescopes give of their very best.`,
        [
          {url:"assets/img/olly/Olly.jpg", title: "Les Granges", subtitle: "Olly Penrice" },
          {url:"assets/img/olly/Sir Isaac.jpg", title: "Les Granges", subtitle: "Sir Isaac" },
          {url:"assets/img/olly/Alan Longstaff Telescope.jpg", title: "Les Granges", subtitle: "The Alan Longstaff Telescope" },
          {url:"assets/img/olly/Twin Takahashi.jpg", title: "Les Granges", subtitle: "Twin Takahashi" },
          {url:"assets/img/olly/TEC 140.jpg", title: "Les Granges", subtitle: "TEC 140" },
        ],
        [
          {
            title: "Astronomy at Les Granges",
            subtitle: "Deep Sky Imaging at Les Granges",
            description: `We'll give you a fully hands-on experience of imaging, using our two photographic observatories. I'll be available to advise on all aspects of capture and processing. If you are new to imaging or are thinking of taking it up then I believe I can save you weeks or months of frustrating trial end error.</br>
            Since we have only two bedrooms all guests can have a generous share of my time and our equipment.</br></br>`
            ,
            images: [
            ]
          },
          {
            title: "Astronomy at Les Granges",
            subtitle: "The Twin Takahashi rig",
            description: `Not one but two Takahashi FSQ106Ns with full frame Atik 11000 monochrome CCD cameras riding on a very accurate and dependable Mesu 200 roller drive mount. The field of view is enormous, roughly 4 degrees by 2.6. Having two setups in parallel simply means working at twice the normal speed. This is ideal for working quickly, going deep and making multiple panel mosaics. The roll off  'Twin Takahashi' observatory has a warm room built in.`,
            images: [
              { url: "assets/img/olly/Heart Neb.jpg", title: "Astronomy at Les Granges", subtitle: "Wide field of view. This is a single frame of the Heart Nebula" },
              { url: "assets/img/olly/M45 .jpg", title: "Astronomy at Les Granges", subtitle: "Great for going deep!" },
              { url: "assets/img/olly/N America Neb.jpg", title: "Astronomy at Les Granges", subtitle: "Also great for mosaics. Nine panel North America Nebula region." },
              { url: "assets/img/olly/ORION.jpg", title: "Astronomy at Les Granges", subtitle: "400 hour 35 panel Orion with Tom O'Donoghue." },
            ]
          },
          {
            title: "Astronomy at Les Granges",
            subtitle: "The TEC 140",
            description: `Our big apochromatic triplet now rides on a second Mesu 200 mount and can use either a widefield full frame CCD or a small format, small pixel Atik 460 for high resolution imaging of small targets.`,
            images: [
              { url: "assets/img/olly/Horsehead.jpg", title: "Astronomy at Les Granges", subtitle: "With widefield camera, Horsehead & Flame Nebulae." },
              { url: "assets/img/olly/M42.jpg", title: "Astronomy at Les Granges", subtitle: "With widefield camera,M42 and 'Running Man.'" },
              { url: "assets/img/olly/M13 .jpg", title: "Astronomy at Les Granges", subtitle: "With Atik 460 camera, M13." },
              { url: "assets/img/olly/M63 .jpg", title: "Astronomy at Les Granges", subtitle: "With Atik 460 cameta, M63 with tidal extensions." },
            ]
          },
          {
            title: "Astronomy at Les Granges",
            subtitle: "Bringing your own kit?",
            description: `We have two concrete pads ready and waiting for you.</br>
            You can enjoy a 'virtual night' at night at Les Granges by watching the Etoile St Cyrice time lapse movies by regular guest Maurice Toet. http://www.mauricetoet.nl/Timelapse</br>
            My articles on astrophotography have appeared in Astronomy Now and Astronomy Technology today. I can take you through from basic processing to complex layer masking, composite imaging and the subtle blending of narrowband data into natural colour.</br>
            Our images have been published in Sky and Telescope, Astronomy Now, The Sky at Night, Astronomie, Astronomy Technology Today, Starlight, the SPA journal, the Guardian Online and Astronomy Photographer of the Year.</br>
            Les Granges is also home to five privately owned and remotely operated systems in our Observatoire Per Prejvall.`,
            images: []
          },
          {
            title: "",
            subtitle: "Astro Imaging",
            description: `<b>‘For astrophotography Les Granges is the place to be’ Award winning astrophotographer Frans Kroon</b><br>
            Les Granges proprietor Olly Penrice is a well known astrophotographer whose picures have been published in Astronomie, Astronomy Now, Sky at Night, Starlight, the SPA journal, the Guardian Online and elsewhere. He has had many forum Pictures of the Week as well as Amateur Astronomy Picture of the Day. He is a frequent contributor to Astronomy Now, mainly reviewing astro-imaging equipment and telescopes. Many Les Granges guests have also had images selected for awards and publication, including Maurice Toet’s contribution to a NASA Astronomy Picture of the Day.</br></br>
            Olly will help you both at the image capture and image processing stages if you wish. It is often possible for complete beginners to produce images of publication quality by the end of a week.</br></br>

            All of this is now more comfortable in our new multi-screen IT and processing room.</br></br>
            This instruction is still free to guests of Les Granges. Some of the more advanced procedures you can learn include layer masking different exposure times for high dynamic range, enhancing colour images with narrowband layers, adding high resolution images to widefield ones from different instruments and creating seamless mosaics.</br></br>

            You can try both one shot colour and monochrome cameras as reviewed in Astronmy Now magazine, for whom Olly wrote a ‘shoot-out’ comparison.</br></br>

            Before investing in CCD imaging gear a trip to Les Granges could save you a great deal of heartache – and cash! There is a lot to learn but help at the beginning will allow you to move quickly into successful astro-imaging.</br></br>

            For those bringing their own equipment we have four prepared observing sites ready and waiting. Many of our guests do this on a regular basis.</br></br>
            Thanks to Ian King Imaging (<a href="http://www.iankingimaging.com" target="_blank">www.iankingimaging.com</a>) for supplying the equipment and for providing technical support.</br></br>

            <div class="boximage">
            <a href="http://ollypenrice.smugmug.com/" target="_blank">
            <img src="assets/img/olly/wide-logo-image.jpg" width="360" height="106"></a>      
            <div class="boximage_caption" style="text-align: center;" align="center">
            Olly’s own astro images appear on <a href="http://ollypenrice.smugmug.com/" target="_blank">Smugmug</a>
            </div>
            </div>
            `,
            images: [
              { url: "assets/img/olly/COMET-HARTLEY-AND-THE-HEART-AND-SOUL_400.jpg", title: "Astro Imaging", subtitle: "Olly's AAPOD, Comet Hartley and the Heart and Soul 9 panel mosaic" },
              { url: "assets/img/olly/ULTIMATEVERSIONM42COMP_400.jpg", title: "Astro Imaging", subtitle: "M42 : Multi exposure high dynamic range image" },
              { url: "assets/img/olly/M33_400.jpg", title: "Astro Imaging", subtitle: "M33 : TEC140 2 panel mosaic" },
              { url: "assets/img/olly/ORION-CONSTELLATION_400.jpg", title: "Astro Imaging", subtitle: "Orion : 55hour exposure, camera lens, 6 panel mosaic" },
            ]
          },
          {
            title: "",
            subtitle: "Astro Gallery",
            description: ``,
            images: [
              { url: "assets/img/olly/COMET-HARTLEY-AND-THE-HEART-AND-SOUL_400.jpg", title: "Astro Imaging", subtitle: "Olly's AAPOD, Comet Hartley and the Heart and Soul 9 panel mosaic" },
              { url: "assets/img/olly/ULTIMATEVERSIONM42COMP_400.jpg", title: "Astro Imaging", subtitle: "M42 : Multi exposure high dynamic range image" },
              { url: "assets/img/olly/M33_400.jpg", title: "Astro Imaging", subtitle: "M33 : TEC140 2 panel mosaic" },
              { url: "assets/img/olly/ORION-CONSTELLATION_400.jpg", title: "Astro Imaging", subtitle: "Orion : 55hour exposure, camera lens, 6 panel mosaic" },
            ]
          }
        ]
      ),
      new Section(
        "cycling",
        "",
        "Cycling",
        `In this part of southern France the high Alps rise away to our east while the still strenuous landscapes of Provence surround us to the south and west. To our north lie the mountains of Die and the Vercors. 
          This is not easy terrain; we are at 900 metres with the local valley floors at around 700 and dozens of cols to conquer, generally in the moderate 1000 to 1300 metre range.`,
        [
          {url: "assets/img/olly/etoile_mtb_400.jpg", title: "Cycling", subtitle: "Straight from the Gite" },
          {url: "assets/img/olly/ventoux1.jpg", title: "Cycling", subtitle: "Mont Ventoux north face seen from Brantes 546m" },
          {url: "assets/img/olly/tour_de_france_400.jpg", title: "Cycling", subtitle: "Tour de France country" },
        ],
        [
          {
            title: "",
            subtitle: "<b>Mountain Biking:</b> starts at the front door!",
            description: `Les Granges is the last house in the village at a point where the tarmac ends and a rocky track heads for the Col D’Adrechon and a heartwarming hurtle down the other side.</br>
            There are many miles of waymarked off-road routes, often really spectacular, but be aware that the French have a very different attitude to the English when it comes to risk. (In England we live by the High Peak Trail on which cyclists ‘are advised to dismount’ in order to descend inclines that steam locomotives used to climb.)</br>
            The riding is tough, challenging and includes some stretches that are quite seriously exposed.</br>
            Marvellous...but not for beginners and undertaken entirely at your own risk.`
            ,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "<b>Road cycling:</b> will suit the energetic tourist and the racer looking for top class training terrain, particularly in the early season when the high Alps and Pyrenees will still be snowy.",
            description: `Within eight miles of the front door you can be starting up one of four local cols in the 1000-1300 metre range. Traffic volumes are low (three to four cars per hour is not unusual) and small roads plentiful, so we can offer many circular routes with a minimum of repetition.</br>
            Expect forests, mountain passes, gorges, lavender fields, rivers, crumbling villages, curious chateaux and a good night’s sleep!</br>
            Mont Ventoux is the big challenge of Provence, no question. But when you've done it we think you'll prefer our local Eastern Baronnnies for the rest of your riding.</br>
            The roads are much quieter, more scenic and - great news - they're largely free of the Mistrale which prefers the wind tunnel of the Rhone Valley. Here the Tour de France tackles our local Col de Perty.`
            ,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "<b>Weather</b>",
            description: `We would regard the cycling season as running from April to October inclusive. In June, July and August be prepared for the big heat! Either side of that, you can anticipate or prolong the English summer. The autumn is just exquisite as huge swathes of mixed woodland flash yellow, red and gold.`
            ,
            images: [
            ]
          },
        ],
      ),
      new Section(
        "climbing",
        "",
        "Climbing",
        `Orpierre rates as one of the best low-grade crags in France. Nestled in a valley in the beautiful Haute Alpes, its compact grey limestone boasts over 250 perfectly bolted routes between 4a- 6c.</br>
          Just a short walk from the sleepy village center, this crag is a must for many.`,
        [
          {url: "assets/img/olly/orpierre1_400.jpg", title: "Climbing", subtitle: "Climbing at Orpierre" },
          {url: "assets/img/olly/orpierre2_400.jpg", title: "Climbing", subtitle: "Climbing at Orpierre" },
        ],
      ),
      new Section(
        "localarea",
        "",
        "Local Area",
        `Although Orpierre has an outdoor pool we'd really recommend the beautiful Plan d'Eau du Riou just a little further away. (About 25 minutes.)</br>
        Surrounded by hills, the artificial lake feels very natural, though there are picnic tables, barbecues, pedaloes, prepared 'beaches', lawns and a secure swimming area for children.</br>
        It's all free, spacious and very relaxing. Nearby are some wonderful walks and bike rides, too, so you can have some excercise then relax.</br>
        We can fix you up with picnic plates and cool boxes for your day out.`,
        [
          {url: "assets/img/olly/leriou.jpg", title: "Local Area", subtitle: "Plan d'Eau du Riou" },
        ],
        [
          {
            title: "",
            subtitle: "",
            description: `Going to market is an event in France and from here you can find one somewhere on most days of the week.</br>
            You'll be spoilt for choice amongst local stallholders offering fresh fruit and veg, olives, honey, specialist breads and cakes, charcuterie and hot dishes to take away.</br>
            On Thursdays in Laragne a brilliant fish stall offers produce fresh from the coast and an Italian couple come over the border with the best Parmesan you'll ever taste!`
            ,
            images: [
              {url: "assets/img/olly/market.jpg", title: "Local Area", subtitle: "Local market" },
            ]
          },
          {
            title: "",
            subtitle: "",
            description: `Springtime is perfect for wild flowers, including the protected Black Tulip seenhere.</br>
            Whole fields light up in vibrant colour, butterflies roam and the landscape is lush and green.`,
            images: [
              {url: "assets/img/olly/tulip.jpg", title: "Local Area", subtitle: "Black Tulip" },
            ]
          },
          {
            title: "",
            subtitle: "",
            description: `Nearby Remuzat is home to a thriving colony of Grifon vultures who sometimes soar over Les Granges. We also spot golden eagles, buzzards, owls and many delightful smaller birds.</br>
            Springtime astronomy is accompanied by the song of nightingales.`,
            images: [
              {url: "assets/img/olly/vulture.jpg", title: "Local Area", subtitle: "Image: christian testaniere with thanks." },
            ]
          },
        ]
      ),
      new Section(
        "gettinghere",
        "",
        "Getting here",
        `<a href="https://www.google.com/maps/d/viewer?ie=UTF8&msa=0&ll=44.34349399999996%2C5.487671000000018&spn=0.687488%2C1.167297&z=9&source=embed&mid=1lp530xSa-hZKwrBeLPJc5TAPIng" target="_blank">View Sun * Star * France in a larger map</a></br>
        (Longitude 5 deg. 38' East, Latitude 44 deg 19' North, altitude 900 metres.)</br></br>
        <b>By car:</b></br>

        Good motorway access from the north. Calais is just over 600 miles.</br>

        35 km from Gap (N85)</br>
        100 km from Grenoble (N75)</br>
        100 km from Valence (D93)</br>
        115 km from Briançon – Tighten Knight (N85)</br>
        125 km from Marseilles (N96 or A51)</br>
        125 km from Avignon (D942 or D946)</br>
        170 km from Nice – Monaco (N202)</br>
        225 km from Turin (N85 or E70)</br>
        225 km from Lyon (N75 or A48)</br>
        250 km from Geneva (N75 or A 41)</br></br>

        <b>By train:</b></br>

        Go to Veynes, Serres or Laragne:</br>
        Paris - Briançon (via Valence): stops in Veynes, change in Veynes for Serres and Laragne.</br>
        Marseilles - Briançon: stops in Laragne, Serres and Veynes.</br>
        Grenoble - Veynes - Gap: stop in Aspres-sur-Buëch.</br></br>

        <b>To Sisteron:</b></br>
        TGV to Aix-en-Provence, Grenoble or Valence</br>
        Bus between Sisteron and Aix TGV stations: fare included in the rail ticket (1 in the morning and 1 return in the evening)</br>
        Car-train in Avignon and Marseilles.</br></br>

        <b>By Air:</b></br>

        Bargain flights go to Marseille (the nearest), Nice, Nimes, Montpellier, Lyons and Grenoble. (Cheapest return flight to date; one penny!)</br>
        You will need transport to enjoy Les Granges but car hire is inexpensive.</br></br>
        <b>Cyclists:</b></br>
        Consider the European Bike Express or contact us for help.`,
        [],
        [
          {
            title: "",
            subtitle: "",
            description: `Going to market is an event in France and from here you can find one somewhere on most days of the week.</br>
            You'll be spoilt for choice amongst local stallholders offering fresh fruit and veg, olives, honey, specialist breads and cakes, charcuterie and hot dishes to take away.</br>
            On Thursdays in Laragne a brilliant fish stall offers produce fresh from the coast and an Italian couple come over the border with the best Parmesan you'll ever taste!`
            ,
            images: [
              {url: "assets/img/olly/market.jpg", title: "Local Area", subtitle: "Local market" },
            ]
          },
          {
            title: "",
            subtitle: "When to come",
            description: `April to mid October are likely to be 'shorts and T-shirts' weather with the high summer months hot!</br>

            However, the massive stone walls and shuttered windows are well adapted to provide natural cool relief and the altitude eliminates mugginess.</br>

            Autumn is just exquisite with blazing reds, yellows and golds in the vast hillside forests all around.</br>

            Winters tend to be bright and clear but with crisp chilly air and cold clear nights. (The woodburners are great fun, cosy and romantic.)</br>

            We have found that around Easter and again in late October/early November there seems to be the risk of a transition period during which low cloud can sit on the area on and off for a week or two. Astronomers shouldn't forget that, in skies like these, a full moon brings near-daylight conditions all night.</br>
            Contact us for advice on the best observing possibilities.`,
            images: [
              
            ]
          },
        ]
      ),
      new Section(
        "booking",
        "",
        "Booking",
        `We offer several booking options depending on your needs.`,
        [],
        [
          {
            title: "",
            subtitle: "Whole house:",
            description: `Here you simply book Les Granges as a normal holiday home without any extras.</br>
            We run Saturday to Saturday at a cost of 800 euro per week. It is a great base for all the activities covered in the website.`
            ,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "House with Astronomy:",
            description: `This gives you the whole house as above PLUS the full astronomy facility with Olly's help at a cost of 950 euro per week. It includes free imaging instruction as outlined on the Astro-Imaging page. All night observing is routine here for those who would like it.</br>
            We stress that the prices above are not 'per person' but can be shared between by all the party.`,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "House with Astronomy and taught Astro course:",
            description: `This is the full house-with-astro booking PLUS 10 hours of introductory astronomy theory in the daytime. That is 1000 Euro for the week.`,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "Shared bookings if the 'whole house' is more than you need:",
            description: `Outside the high season of June to September inclusive we now offer a 'half booking' option which gives you one of the two bedrooms and shared use of the rest of the house. The maximum number of people per room in this option is two, so there will not be more than four people sharing Les Granges. A shared booking of one room costs 425 euro per week for one person and 500 euro per week for two. The astronomy facilities and assistance will be shared equitably.`,
            images: [
            ]
          },
          {
            title: "",
            subtitle: "Meals.",
            description: `Although Les Granges has self catering facilities you might like to have meals prepared for you some or all of the time. This is possible. Please contact us to discuss your preferences.`,
            images: [
            ]
          },
        ]
      ),
      new Section(
        "contact",
        "",
        "Contact Us",
        `From abroad 00 33 4 92 66 22 57</br>
        From France 04 92 66 22 57</br>`,
        [],
        [],
        [
          { component: FormComponent }
        ],
      ),
      new Section(
        "links",
        "",
        "Reviews",
        ``,
        [],
        [],
        [],
        [
          new Links(
            "Guests with websites and reviews of Les Granges ( click image )",
            [
              { title: "John Punnett", logoUrl: "assets/img/olly/punnett.jpg", url: "http://homepage.ntlworld.com/john.punnett" },
              { title: "Frans Kroon", logoUrl: "assets/img/olly/kroon.jpg", url: "https://www.franskroon.nl/" },
              { title: "Peter Vasey", logoUrl: "assets/img/olly/vasey.jpg", url: "http://www.madpc.co.uk/~peterv/astroplover/Main.htm" },
              { title: "Maurice Toet", logoUrl: "assets/img/olly/toet.jpg", url: "http://www.dutchdeepsky.com/lesgranges.html" },
              { title: "REVIEW IN THE GUARDIAN ONLINE", logoUrl: "assets/img/olly/guardian.jpg", url: "https://www.theguardian.com/travel/2008/jun/26/france.provence" }
            ]
          ),
          new Links(
            "General Links",
            [
              { title: "", logoUrl: "", url: "www.stargazerslounge.com" },
              { title: "", logoUrl: "", url: "www.ukastroimaging.co.uk" },
              { title: "", logoUrl: "", url: "www.webastro.net" },
              { title: "At Les Granges we use and recommend ATIK CCD cameras", logoUrl: "", url: "https://www.atik-cameras.com/" },
              { title: "Local Tourist Board", logoUrl: "assets/img/olly/tourist_office.jpg", url: "https://www.provence-des-montagnes.com/" },
            ]
          )
        ]
      ),
      
    ];

  }

  ngAfterViewInit() {
    AOS.init();  // Initialisation AOS
    setTimeout(() => AOS.refresh(), 100); // Rafraîchir après que les sections soient rendues
  }

}
