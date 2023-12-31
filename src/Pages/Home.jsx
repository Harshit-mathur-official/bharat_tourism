import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner_1 from '../images/Image1.png';
import Banner_2 from '../images/Image2.png';
import Banner_3 from '../images/Image3.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            {/* Banner */}
            <section>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Banner_1} className="d-block w-100" alt="Banner-1" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner_2} className="d-block w-100" alt="Banner-2" />
                        </div>
                        <div className="carousel-item">
                            <img src={Banner_3} className="d-block w-100" alt="Banner-3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* Top Destination */}
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2><i>Explore Top Destinations by Region</i></h2>
                            <h5>Most popular choices for travellers from India</h5>
                        </div>
                        <div className='col-lg-5'>
                            <div className='destination_img text-center'>
                                <Link to={'/rajasthan'} target='_blank'>
                                    <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div className='destination_name'>
                                <h5>
                                    <Link to={'/rajasthan'}>Rajasthan</Link>
                                </h5>
                            </div>
                        </div>
                        <div className='col-lg-7 col-sm-12'>
                            <div className='row'>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-6 col-6 pb-3'>
                                    <div className='destination_img'>
                                        <a href="" target="_blank">
                                            <img src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp" alt="" className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className='destination_name'>
                                        <h5>Uttrakhand</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <h2><i>Explore India</i></h2>
                    <h5>These popular destinations have a lot to offer</h5>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/up-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/delhi-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/rajasthan-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/up-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/delhi-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/rajasthan-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/up-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/delhi-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.tourmyindia.com/imagess/rajasthan-package.webp" className='img-fluid' alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section>
                <div className='container my-5'>
                    <h3 className='pb-3'><i>Why Choose Us?</i></h3>
                    <div className='row'>
                        <div className='col-md-3 col-sm-2 col-12 achieves'>
                            <div class="acheive-sec green">
                                <figure>
                                    <img src="https://www.tourmyindia.com/imagess/thumb.png" alt="like image" />
                                </figure>
                                <div class="acheive-content">
                                    <h3><i>20+ Year Experience</i></h3>
                                    <p> Boasting over two decades in the tourism and hospitality industry, Tour My India has amassed invaluable experience that sets us apart.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 col-12 achieves'>
                            <div class="acheive-sec blue">
                                <figure>
                                    <img src="https://www.tourmyindia.com/imagess/thumb.png" alt="like images" />
                                </figure>
                                <div class="acheive-content">
                                    <h3><i>A Team of Experts</i></h3>
                                    <p>Our experienced team at Tour My India is more than just proficient; they are destination experts for every location within the mesmerizing landscape of India. Their knowledge is an invaluable asset for every traveler.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 col-12 achieves'>
                            <div class="acheive-sec red">
                                <figure>
                                    <img src="https://www.tourmyindia.com/imagess/thumb.png" alt="like image" />
                                </figure>
                                <div class="acheive-content">
                                    <h3><i>Verified Hotels</i></h3>
                                    <p>We offer a meticulously selected and verified list of high-grade hotels. Our partners consistently deliver top-notch service, ensuring an exceptional experience for our guests.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 col-12 achieves'>
                            <div class="acheive-sec yellow">
                                <figure>
                                    <img src="https://www.tourmyindia.com/imagess/thumb.png" alt="like image" />
                                </figure>
                                <div class="acheive-content">
                                    <h3><i>Value for Money Tours</i></h3>
                                    <p>With Tour My India, your vacation is not just about sightseeing; it's about creating memories that last a lifetime. Our holiday packages are hassle-free and designed with a focus on value for money. Trust us to weave unforgettable experiences into your journey, ensuring every moment you spend with us is well worth it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container pb-5'>
                    <div className='row mx-auto'>
                        <h2>About <br />Incredible India</h2>
                        <div className='col-lg-6 col-12'>
                            <div class="about-india">
                                <p>Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.</p>
                                <p>The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest. Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.</p>
                                <p>India Tours offers a chance to explore its biodiversity in the country's many national parks and wildlife reserves. An enthralling experience entails in the India wildlife tour packages that take tourists to the habitats of Royal Bengal Tigers, one-horned rhinos, and snow leopards amongst many rare, endangered, and unique species of flora and fauna.</p>
                            </div>
                        </div>
                        <div className='col-lg-5 col-12 order-lg-2 order-1'>
                            <div className='about-india-img'>
                                <img src="https://www.tourmyindia.com/imagess/varanasi-india.webp" alt="Varanasi India" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container py-5'>
                    <div className='row mx-auto'>
                        <div className='col-lg-6 col-12'>
                            <div className='information'>
                                <h3>India Climate & Season</h3>
                                <p>India experiences a diverse climate and weather conditions due to its vast size and geographical features. The country is characterized by five main seasons: Spring, Summer, Monsoon, Autumn, and Winter. The Summer season, from April to mid-June, brings scorching temperatures, especially in the northern plains. The Monsoon, from mid-June to September, brings heavy rainfall, crucial for agriculture. Winter, from November to February, varies from mild to severe cold, with snowfall in some regions. Autumn and Spring provide pleasant weather with moderate temperatures. India's climate is influenced by the Himalayas, oceans, and geographical variations, resulting in a rich and varied weather pattern.</p>
                                <div className='tab-list'>
                                    <ul class="nav nav-pills" role="tablist">
                                        <li>
                                            <a class="nav-link active" data-bs-toggle="tab" href="#summer" role="tab" aria-controls="summer" aria-selected="true">Summer</a>
                                        </li>
                                        <li>
                                            <a class="nav-link" data-bs-toggle="tab" href="#monsoon" role="tab" aria-controls="monsoon" aria-selected="false">Monsson</a>
                                        </li>
                                        <li>
                                            <a class="nav-link" data-bs-toggle="tab" href="#winter" role="tab" aria-controls="winter" aria-selected="false">Winter</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content ps-lg-0 ps-3 my-2">
                                        <div class="tab-pane fade show active" id="summer" role="tabpanel">
                                            <div className='info-content'>
                                                <div className='image'>
                                                    <img src="https://www.tourmyindia.com/imagess/summer.webp" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <p>India's Summer season spans from April to mid-June, bringing sweltering temperatures across the country, particularly in the northern plains. During this time, the scorching heat can be intense, and people often seek refuge in cooler places or use air conditioning to beat the heat. The temperature ranges between 40–45°C.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="monsoon" role="tabpanel">
                                            <div className='info-content'>
                                                <div className='image'>
                                                    <img src="https://www.tourmyindia.com/imagess/monsoon.webp" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <p>The Monsoon season in India is a vital climatic phenomenon that occurs from mid-June to September. It brings much-needed rainfall to the subcontinent, essential for agriculture and water resources. During this season, the country experiences heavy showers and occasional thunderstorms, cooling down the scorching summer heat. The temperature range varies, but generally, it becomes more pleasant compared to the summer season. The Monsoon season plays a crucial role in shaping India's landscape and economy.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="winter" role="tabpanel">
                                            <div className='info-content'>
                                                <div className='image'>
                                                    <img src="https://www.tourmyindia.com/imagess/winter.webp" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <p>The Winter season in India spans from November to February and varies in climate across regions. In the northern parts, it can be quite cold, with temperatures dropping significantly, especially in the Himalayas where snowfall occurs. This period is a popular tourist season in India, attracting visitors to enjoy the pleasant weather and explore the snowy landscapes. Winter offers a great opportunity for various winter sports and activities, making it a favorite destination for both domestic and international tourists.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div className='information'>
                                <h3>Visa Information</h3>
                                <p>Obtaining a visa for India is an essential step for foreign travelers planning to visit the country. India offers various visa categories, including tourist visas, business visas, and e-visas. The tourist visa allows visitors to explore India's rich cultural heritage, historical sites, and natural beauty. The e-visa is a convenient option that allows travelers to apply for their visa online, streamlining the process and reducing the wait time. To apply for an India visa, travelers need to submit necessary documents, such as a valid passport, travel itinerary, and recent photographs. Planning ahead and adhering to the application guidelines ensure a smooth visa process for a memorable trip to India. For the latest information about getting a visa for India, visit the official website at <a href="https://indianvisaonline.gov.in/.">https://indianvisaonline.gov.in/.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='discover-india'>
                <div className='container'>
                    <h3>Discovering India</h3>
                    <div className='row mx-auto'>
                        <div className='exploring'>
                            <div className='tab-listing'>
                                <ul class="nav nav-pills" role="tablist">
                                    <li>
                                        <a class="nav-link active" data-bs-toggle="tab" href="#explore-regions" role="tab" aria-controls="explore-regions" aria-selected="true">Explore Regions</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" data-bs-toggle="tab" href="#top-things-to-do" role="tab" aria-controls="top-things-to-do" aria-selected="false">Top Things To Do</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" data-bs-toggle="tab" href="#best-places-to-visit" role="tab" aria-controls="best-places-to-visit" aria-selected="false">Best Places To Visit</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" data-bs-toggle="tab" href="#arts-culture-history" role="tab" aria-controls="arts-culture-history" aria-selected="false">Arts, Culture & History</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" data-bs-toggle="tab" href="#fairs-festivals" role="tab" aria-controls="fairs-festivals" aria-selected="false">Fairs & festivals</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" data-bs-toggle="tab" href="#museum-in-india" role="tab" aria-controls="museum-in-india" aria-selected="false">Museum in India</a>
                                    </li>
                                </ul>
                                <div class="tab-content ps-lg-0 ps-3 my-2">
                                    <div class="tab-pane fade show active" id="explore-regions" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#pills-north-india" role="tab" aria-controls="pills-north-india" aria-selected="true">
                                                        <span>01</span><br />North India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-south-india" role="tab" aria-controls="pills-south-india" aria-selected="false">
                                                        <span>02</span><br />South India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-east-india" role="tab" aria-controls="pills-east-india" aria-selected="false">
                                                        <span>03</span><br />East India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-west-india" role="tab" aria-controls="pills-west-india" aria-selected="false">
                                                        <span>02</span><br />West India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-central-india" role="tab" aria-controls="pills-central-india" aria-selected="false">
                                                        <span>02</span><br />Central India
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='pills-north-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>From fertile terrains to barren deserts, North India is a region known for its great diversity and popular tourist places. It includes Rajasthan with its scorching temperatures, reaching extremes, and Kashmir with its hill stations and frozen lakes in the majestic Himalayas. It narrates the story of our fight for freedom through its monuments and memorials, and takes us on a journey through time with its food and architecture. North India is an ideal destination for those who travel for leisure, adventure, or to explore historical sites of the past. There is so much to discover on a North India tour. Jammu & Kashmir, Ladakh, Himachal Pradesh, Punjab, Chandigarh, Uttarakhand, Rajasthan, Haryana, Delhi, and Uttar Pradesh constitute the northern part of India. A blend of forts, havelis, and domed structures, North India speaks for itself with its rich heritage and cultural significance. It also houses a number of holy pilgrimages of Hindu, Sikh, and Buddhist origins, such as Kashi and Ayodhya in Uttar Pradesh, the Golden Temple in Amritsar, Punjab, and Sarnath in Varanasi, Uttar Pradesh. The allure of the Himalayas and the enchanting beauty of North India make it a must-visit destination for travelers from all around the world.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the Most Popular Tourist Destinations in North India Region are:</h4>
                                                                <div class="accordion  pt-3" id="accordionFlushExample">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                                            <div class="accordion-body">Uttarakhand is very famously known as "Devbhumi" or the "Land of the Gods", owing to its status as a popular pilgrimage site for Hinduism and its followers. Uttarakhand Tourism is prominently centered around its religious significance. One of the most sought-after and holy pilgrimages that devotees embark on is the "Char Dham Yatra", which involves visiting the four sacred sites located in the state: Yamunotri, Gangotri, Kedarnath, and Badrinath. These destinations hold immense spiritual importance and attract a multitude of devotees and tourists from far and wide.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Jammu & Kashmir (UT)
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                                            <div class="accordion-body">Jammu & Kashmir, a union territory in the northern part of India, is a unique destination that attracts tourists from all over the world. Jammu and Kashmir Tourism offers a mesmerizing experience for travelers with its breathtaking landscapes and rich cultural heritage. The region is often referred to as the "Heaven on Earth" due to its stunning beauty and diverse attractions. Whether you visit during the summer or winter months, Jammu & Kashmir will leave you awe-inspired with its majestic mountains, serene lakes, and warm hospitality, making it a must-visit destination in Incredible India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Ladakh (UT)
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                                            <div class="accordion-body">Ladakh, situated along the banks of the River Indus, is a captivating destination that attracts travelers from all over the world. Ladakh Tourism offers a unique experience with its monasteries, high mountain passes, and thrilling adventure sports. A Leh Ladakh Tour promises unforgettable memories as you explore the breathtaking landscapes of the Himalayas. Adventure enthusiasts will find their haven in Ladakh, where they can indulge in a variety of activities like river rafting, rock climbing, paragliding, camel safari, trekking, biking, and backpacking trips. The region's cold desert adds to its charm and allure. With its awe-inspiring beauty and thrilling escapades, Ladakh in the Himalayas is a dream destination for those seeking an unforgettable adventure. Experience the magic of this rugged and serene land with Ladakh Tourism and embark on a journey like no other.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Himachal Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                                            <div class="accordion-body">The state of Himachal Pradesh, nestled along the lower ranges of the Himalayas, is a haven for travelers seeking a perfect blend of nature and adventure. Himachal Tourism offers a wide array of experiences, making it an ideal destination for those looking for mountain getaways and exploring the Himalayas. With its high elevation, Himachal Pradesh promises astonishing views of mighty mountains and lush valleys that will leave you spellbound. Adventure sports enthusiasts will find plenty of opportunities to indulge in thrilling activities. Additionally, the state's heart-warming delicacies are sure to delight your taste buds. Whether you seek serene mountain getaways or adrenaline-pumping adventures while exploring the majestic Himalayas, Himachal Pradesh has something special in store for every traveler. Plan your trip with Himachal Tourism and immerse yourself in the natural beauty and cultural richness of this enchanting state.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Rajasthan
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                                            <div class="accordion-body">Rajasthan, one of the most visited destinations in India, shares its borders with the neighboring country of Pakistan. The state is renowned for its regal architecture, boasting marvelous forts, palaces, and havelis that stand as a testament to its glorious past. Rajasthan Tourism offers a glimpse into the rich heritage and royal history of the region. Home to the vast expanse of the Thar Desert, Rajasthan experiences scorching temperatures during the summer, with the mercury soaring up to 50° Celsius. Despite the intense heat, the state's unique charm and cultural allure continue to draw travelers from around the world. Discover the grandeur of Rajasthan's palaces, immerse yourself in its vibrant culture, and explore the treasures of the Thar Desert with Rajasthan Tourism. Experience the magic of this majestic state, which remains an alluring destination for visitors seeking a glimpse into India's royal heritage.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/hill-region.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-south-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Exploring South India is an enriching experience that allows you to delve into a melting pot of diverse cultures, ranging from colonial influences to the ancient heritage of India. This vibrant region not only aims to be a haven for popular tech hubs in the country but also captivates travelers with its plethora of top visiting places, including mesmerizing hill stations and picturesque beaches. The architecture in South India is a testimony to its rich history, boasting a beautiful blend of French, British, Islamic, and Dravidian styles that add to its unique charm. The Southern part of India comprises the states of Telangana, Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Puducherry, and the Island territories of Andaman & Nicobar and Lakshadweep. Embarking on a South India tour allows you to explore the diverse landscapes, historical landmarks, and vibrant cultures of these states.</p>
                                                                <p>From tranquil backwaters in Kerala to the majestic temples of Tamil Nadu, and from the bustling tech cities of Bangalore and Hyderabad to the serene beaches of Puducherry, this region offers a perfect tropical vacation for all kinds of travelers. Additionally, the thrill of engaging in water sports amidst such scenic surroundings will surely entice you to return for more unforgettable experiences. Experience the wonders of South India and create memories that will last a lifetime on your journey through this captivating region.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the popular tourist destinations in Southern India for hill stations, heritage, spiritual, and beach holidays are-</h4>
                                                                <div class="accordion pt-3" id="accordionExample">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Kerala
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body">Kerala, also referred to as "God's Own Country," is considered paradise on Earth and is a prime destination for India Tourism. With its beautiful coconut and palm trees, tranquil beaches, and enchanting backwaters, Kerala is where you want to be. The state is blessed with its diverse wildlife, scrumptious cuisine, classical art performances, and the practice of Ayurveda. Explore the wonders of Kerala and immerse yourself in the beauty and cultural richness that this captivating state has to offer.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Tamil Nadu
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body">Home to one of the popular hill stations, Ooty, Tamil Nadu is a beauty. Located along the Bay of Bengal, the state is best known for its temples, beaches, classical dance forms, textiles, and food. Speaking of Ooty, it is a popular tourist attraction in the state. Once serving as one of the summer headquarters of the East India Company, the area comprises various tea estates, waterfalls, and lush greenery all around.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Andaman & Nicobar Islands
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body">Andaman & Nicobar Islands are a group of islands in the Bay of Bengal. The islands are known for their pristine beaches, clear waters, and their significant role in India's fight for freedom. Access to the islands is available through either flights or ships.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Karnataka
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                                            <div class="accordion-body">Karnataka is the land of the esteemed Vijayanagaras, blessed with history and artifacts. The state has something for everyone. Whether you are looking for a hill station to cool off, a beach to take long walks on, or maybe you are just a history buff who is enamored by the saga of the once powerful Vijayanagar Empire, Karnataka has it all.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/beach-region.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-east-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The East & Northeast part of India tells a captivating story of its past with its rich and intricate architecture, along with its ancient caves. It is a land of diverse experiences, offering nature tourism with its abundance of wildlife, wildlife sanctuaries, and national parks. This region also serves as a celebration of multiple religions, housing some of the prominent pilgrimage sites of Buddhism, Jainism, and Hinduism. Moreover, cultural tourism thrives in this area, as the handicraft and the tribal culture distinguish this region and make it stand out from the rest. The vibrant festivals celebrated by various tribes add to the cultural richness of the East & Northeast part of India. If you're an avid traveler seeking unique experiences, consider embarking on a North East India tour, where you can explore the fascinating architecture, delve into the spiritual aspects, immerse yourself in the natural beauty, and witness the captivating tribal culture and festivities.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the Popular Tourist Destinations in the East & Northeast Region of India Are:</h4>
                                                                <div class="accordion pt-3" id="accordionExample1">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                West Bengal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                                                            <div class="accordion-body">West Bengal is a land of promising hill stations, mountains, beaches, and rich wildlife. It is home to the Royal Bengal Tigers in the Sunderbans. The state attracts a number of tourists every year who want to indulge in the natural landscapes of the region, such as the popular hill station and tea estate Darjeeling. It is one of the prominent tourist destinations, known for its lush and misty mountains, as well as the world-famous Darjeeling tea.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Odisha
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                                                            <div class="accordion-body">The eastern state of Odisha, adorned with a beautiful coastline on the east, comes alive with its rich history. It is not only a site of various monuments and inscriptions from Ancient India that attract history buffs and tourists alike, such as the Ashokan Rock Edict in the capital city of Bhubaneshwar, a site of the Archaeological Survey of India, but also a significant pilgrimage trail. Odisha tourism offers a diverse range of experiences, from exploring historical sites to embarking on a spiritual journey along its pilgrimage trail.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                                                            <div class="accordion-body">Home to Mount Khangchendzonga, the third highest mountain in the world, Sikkim is a state with numerous mountain ranges, valleys, glaciers, high altitude lakes, and waterfalls, making it an ideal destination for Sikkim Tourism. The state is best known for its trekking activities, monasteries, wildlife, and adventure tourism. Exploring Sikkim in Northeast India promises a thrilling and memorable experience as you immerse yourself in the breathtaking beauty of its natural landscapes and indulge in various exciting activities.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Meghalaya
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                                                            <div class="accordion-body">Meghalaya, literally meaning "dwelling of clouds," is home to Mawsynram, the wettest place on Earth. This northeastern state has abundant hills, valleys, lakes, waterfalls, and dense and sacred forests, making it a nature lover's paradise. The state is a peaceful residence of tribals belonging to the Khasi, Pnar, and the Garo community, preserving their unique cultures and traditions.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Rajasthan
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                                                            <div class="accordion-body">Rajasthan, one of the most visited destinations in India, shares its borders with the neighboring country of Pakistan. The state is renowned for its regal architecture, boasting marvelous forts, palaces, and havelis that stand as a testament to its glorious past. Rajasthan Tourism offers a glimpse into the rich heritage and royal history of the region. Home to the vast expanse of the Thar Desert, Rajasthan experiences scorching temperatures during the summer, with the mercury soaring up to 50° Celsius. Despite the intense heat, the state's unique charm and cultural allure continue to draw travelers from around the world. Discover the grandeur of Rajasthan's palaces, immerse yourself in its vibrant culture, and explore the treasures of the Thar Desert with Rajasthan Tourism. Experience the magic of this majestic state, which remains an alluring destination for visitors seeking a glimpse into India's royal heritage.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/sikkim-region.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-west-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The Western part of India, known as the West India Region, is home to prominent wildlife sanctuaries and national parks. It serves as a testimony to the past with its historical sites and caves. The West also adorns a number of religious sites, such as temples and various churches constructed during the colonial period. The states and union territories of Gujarat, Maharashtra, Dadra and Nagar Haveli, Daman & Diu, and Goa make up this vibrant region of Western India, as seen on the India tourism map. With its architectural style influenced by its colonizers, the place has its story to tell, making it an intriguing destination for those visiting West India. The peaceful and beautiful beaches of these coastal territories also offer a variety of water sports for those who are up for it. Whether you are exploring the wildlife sanctuaries, diving into the history of ancient caves, or enjoying the serene beaches, West India has something special in store for every traveler.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the Popular Tourist Destinations in Western India Include -</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExample1">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Gujarat
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
                                                                            <div class="accordion-body">Home to the prominent freedom fighter Mahatma Gandhi, Gujarat has its own marvels to enjoy. Gujarat prides itself on having the longest coastline in India, among many other things. The state has numerous national parks and wildlife sanctuaries, with the most popular being the Gir National Park, which houses the Asiatic Lion along with various other animals like crocodiles, Chital, and leopards.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Maharashtra
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
                                                                            <div class="accordion-body">The state of Maharashtra, renowned for Maharashtra tourism, is situated in the western part of India. It is a land with beautiful mountains, rivers, and charming coastlines, making it a favorite among tourists. According to the last census, Maharashtra is the second most populous state in the country. With a myriad of tourist places to explore, Maharashtra offers a diverse range of experiences, from its bustling cities to serene hill stations, historical landmarks, and picturesque beaches. Whether you're seeking adventure, culture, or relaxation, Maharashtra has something special to offer for every traveler.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Goa
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
                                                                            <div class="accordion-body">Goa, known for its vibrant tourism, is the smallest state of India, famous for its pristine beaches, delectable seafood, and lively nightlife. Beyond the coastal allure, it also boasts various temples, churches, and wildlife sanctuaries, offering a rich blend of cultural and natural attractions. Having been a Portuguese colony for about 450 years, Goa's architecture carries a distinct charm and heritage, reflecting its colonial past. As one of the most popular tourist destinations in western India, Goa attracts travelers from all around the world seeking relaxation, adventure, and cultural experiences. Its beautiful beaches, coupled with a lively atmosphere, make it an ideal getaway for all types of visitors. Whether you are strolling along the sandy shores, exploring the fascinating temples and churches, or indulging in the pulsating nightlife, Goa promises a memorable and diverse experience for every traveler.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/west-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-central-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The centralmost part of India consists of the states of Madhya Pradesh and Chhattisgarh, making it a significant hub for tourism in central India. Madhya Pradesh originally was a single state until the year 2000 when Chhattisgarh was carved out from it to form a separate state. Both states hold a treasure trove of amazing historical sites, temples, waterfalls, forests, and wildlife, making them ideal destinations for tourists looking for places to visit. Filled with various tribes, the folk art, and culture in this region are reminiscent of its rich heritage, offering visitors a glimpse into its diverse and vibrant traditions. Moreover, this region of the country holds some of the prominent wildlife sanctuaries of India, allowing travelers to immerse themselves in the natural beauty and wildlife diversity. Additionally, it is noteworthy for its important mineral mining sites, adding to the economic significance of the region. Whether you're an art and culture enthusiast, a nature lover, or an adventure seeker, central India has something special to offer for every traveler.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExample2">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Madhya Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                                                                            <div class="accordion-body">Madhya Pradesh, lovingly known as the "Heart of India," is a state in Central India, and it offers a delightful experience for Madhya Pradesh Tourism. The name literally means "Central State or Central Region," and it lives up to its name by being a central hub of cultural and natural attractions. Adorned with numerous wildlife sanctuaries and national parks, the state provides ample opportunities for wildlife enthusiasts and nature lovers to explore its diverse flora and fauna.

                                                                                In addition to its natural wonders, Madhya Pradesh boasts a rich historical heritage with its collection of historical monuments. From ancient temples and majestic forts to impressive palaces and intricately carved structures, these tourist attractions take visitors on a captivating journey through the state's glorious past. With its perfect blend of nature and history, Madhya Pradesh presents a compelling destination for travelers seeking a truly enriching and memorable experience. Whether you are exploring the dense forests and wildlife reserves or marveling at the architectural wonders, Madhya Pradesh offers an enchanting and diverse range of attractions for every traveler.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Chattisgarh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                                                                            <div class="accordion-body">The state of Chhattisgarh is considered one of the newer states of India, having been carved out of Madhya Pradesh in 2000 to become a separate state. The state prides itself on being home to forty-two tribes, contributing to its rich cultural diversity. With its abundance of rivers, waterfalls, and dense forests, Chhattisgarh makes for a perfect travel destination, offering a serene and picturesque setting for travelers to explore and enjoy.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/central-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="top-things-to-do" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#pills-trekking-india" role="tab" aria-controls="pills-trekking-india" aria-selected="true">
                                                        <span>01</span><br />Trekking in India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-wildlife-safari" role="tab" aria-controls="pills-wildlife-safari" aria-selected="false">
                                                        <span>02</span><br />Wildlife Jungle Safari
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-river-rafting" role="tab" aria-controls="pills-river-rafting" aria-selected="false">
                                                        <span>03</span><br />River Rafting
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-nature-sightseeing" role="tab" aria-controls="pills-nature-sightseeing" aria-selected="false">
                                                        <span>04</span><br />Nature Sightseeing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-heritage-walk" role="tab" aria-controls="pills-heritage-walk" aria-selected="false">
                                                        <span>05</span><br />Heritage Walk
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-pilgrimage" role="tab" aria-controls="pills-pilgrimage" aria-selected="false">
                                                        <span>06</span><br />Pilgrimage
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#pills-adventure-sports" role="tab" aria-controls="pills-adventure-sports" aria-selected="false">
                                                        <span>07</span><br />Adventure Sports
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='pills-trekking-india' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Trekking is the way of engaging with nature at its best, isn't it? India is at the top of the world tourism map when it comes to adventurous trekking and hiking activities. The country offers some of the best locations and adventurous treks for enthusiasts. With a long belt of the Mighty Himalayan range covering North and North-eastern India, plenty of treks will put you in awe with their panoramic views and heartwarming mountain peaks. The Himalayan states of India, like Uttarakhand, Himachal Pradesh, Jammu and Kashmir, Ladakh, and Sikkim, offer some of the best trekking trails for beginners as well as professional trekkers. In fact, you will never run out of options, as each one seems more amazing than the previous.</p>
                                                                <p>You can start your trekking journey from the low-lying treks such as the Triund Trek and Chopta-Chandrashila Trek, which are suitable for beginners. For those seeking more challenge, there are moderate treks such as the Great Lake Trek and Har Ki Dun Trek. Furthermore, the Himalayas behold some high-altitude treks like Pin Parvati and Chadar trek, which are perfect for experienced trekkers seeking a thrilling adventure. India's diverse landscapes and majestic Himalayan ranges offer an unparalleled trekking experience, making it a dream destination for trekkers and adventure enthusiasts from around the world. Whether you are looking for breathtaking vistas or a test of endurance, India's trekking trails have something to offer for everyone.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleTrekking">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Trekking in Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Trekker's paradise, Uttarakhand, stands out among all the Himalayan states in India, offering the most trekking trails that become increasingly adventurous as you move on to the next. The state boasts some of the most beautiful and scenic treks, such as Har Ki Dun and Kedarkantha, as well as pilgrimage treks like Tungnath-Chandrashila and Kedarnath trek. For extreme trek lovers, Uttarakhand also offers high-altitude treks like Roop Kund, reaching an altitude of more than 5000m.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Trekking in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ideal for backpackers and flashpackers, Himachal Pradesh is no less than a heaven for trekking. The state has already gained high popularity among the youth and Gen Z for trekking and other adventures, as the hill stations are easily accessible and well-equipped with all facilities. Adorable mountains, adventurous terrains, and economic options are the qualities that will make Himachal Pradesh your next adventure getaway.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Trekking in Kashmir
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Kashmir is an unbelievably beautiful wonderland in India, offering some of the most breathtaking scenic treks that people from around the world come to enjoy. It tops the list of many adventure travelers and trekking enthusiasts for its unparalleled and distinctive treks. Gulmarg, Sonmarg, Pahalgam, and Yusmarg are the main bases that provide treks showcasing the Kashmir valley from within and from deep within its heart.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Trekking in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ladakh challenges trekkers in its own unique way but rewards them with the opportunity to witness the enormous beauty of its gigantic mountains, an experience not everyone can be a part of. Although the terrain is rough, dry, demanding, and gritty, trekking enthusiasts conquer it time and again. Unlike treks in other Himalayan states, treks in Ladakh are mostly at high altitudes. While there are several short treks, there are more long and intense ones. However, the best part of all is exploring this remote location while disconnecting yourself from the rest of the world.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Trekking in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Nestled in the might of the enormous Kanchenjunga, Sikkim boasts some truly majestic trekking routes, offering unparalleled beauty amidst nature. The trails are enveloped by lush green wildlife, occasionally granting lucky trekkers sightings of beautiful creatures like musk deer and the exotic red panda. With nearly fifteen treks to choose from in Sikkim, each one promising a unique adventure, including the mighty Kanchenjunga, never fail to enthrall and captivate trekkers, making it an unforgettable experience.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/trekking-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-wildlife-safari' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Wildlife adventure exploration is one of the top activities to embark on during an Incredible India tour. Just the thought of venturing into the wild is enough to send shivers of excitement down your spine. India is blessed with a treasure trove of wildlife, scattered throughout the nooks and corners of the country. Exploring the wondrous beauty of the wild not only captivates photographers and wildlife enthusiasts but has also become a new favorite for honeymoon couples and family travelers. In the wildlife safaris, you will have the opportunity to encounter some of the most magnificent and endangered species thriving in India, such as the Indian one-horned rhinoceros, Barasingha, and Royal Bengal Tiger. Nature and wildlife lovers, as well as photographers from across the globe, find themselves drawn to India's exotic yet thrilling national parks and wildlife sanctuaries, where they can have their next extraordinary encounter with nature and the wild.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleWildlife">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Ranthambore National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">The Rajasthani royal dignity, Ranthambore National Park, is an excellent wildlife destination for safaris, wildlife experiences, and, of course, spotting the Bengal Tigers. The park boasts a good density of these big cats, but spotting one wandering around is still a matter of luck. Ranthambore is also home to many other species of flora and fauna</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Kanha National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Kanha National Park, in case you didn't know, was the jungle that inspired the famous novel "The Jungle Book" by Rudyard Kipling. This renowned national park in Madhya Pradesh is well-known for its diverse wildlife, featuring many special attractions such as Barasingha, Panther, Blackbuck, Chital, Sambar, and Barking deer, yet your eyes won't stop seeking Bengal Tigers. Fortunately, there is a fair chance of spotting tigers here, as the park has a high density of almost 7 tigers per 100 sq. km.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Corbett National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">"You are lucky if you spot tigers, but unlucky if not in Jim Corbett National Park." On the bucket list of many, Jim Corbett National Park is one of the oldest and well-known national parks in India. A perfect paradise for wildlife and nature lovers, the park is blessed by mother nature and offers great chances for tiger sightings. Along with the highest number of tigers, the park also boasts beautiful landscapes and is home to many other remarkable species, such as sloth bears, Asiatic black bears, jungle cats, elephants, wild boars, chitals (spotted deer), barking deer, and nilgai (Indian antelope).</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Bandhavgarh National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Bandhavgarh National Park, with a gigantic area spanning 1500 sq. kilometers, is perpetually a remarkable forest in the heart of India, Madhya Pradesh. This vast forest is filled with small and large animals, each with its own captivating tales. The majestic sounds of nature and the wild speaking of its existence will amaze you while being in Bandhavgarh National Park. You will find plenty of wild animals in the vicinity, including Leopards, Sambar, Barking Deer, Wild Boar, Gaur, Chausingha, and Chinkara, as well as the Asiatic jackal, Bengal fox, striped hyena, jungle cat, leopard, and the Bengal tiger.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Tadoba National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">A feeling of thrill upon entering the gates, a sense of connection while driving through the forest and encountering wild creatures, and the captivating experience of spotting tigers are what make your trip to Tadoba National Park truly memorable. Located in central India, Tadoba National Park boasts thriving wildlife, offering abundant sightings of animals such as leopards, Jungle Cats, Sloth bears, Sambars, Spotted deer, and around 190 species of birds.

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/wildlife-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-river-rafting' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>An exhilarating adventure for thrill-seekers and a daring challenge for their friends, river rafting is one of the top things to do in India's adventure tourism. It's an amazing way to connect with nature and experience its glorious ways. India, featured on the top of world adventure tourism map, is home to a plethora of rivers flowing down great mountain alleys, carving heart-pounding courses of ups and downs, rapids, and falls in their streams. Once aboard a raft, no one looks back or loosens their grip on the paddles, as the rafting adventure takes them through an adrenaline-pumping ride. White water rafting in India has gained popularity among tourists as a safe adventure sport, suitable for both newbies and expert rafters. While Rishikesh remains the most popular destination for rafting enthusiasts, there are countless other spots spread across the expansive Himalayan states, each offering its own unique and thrilling experience. So, for those seeking an adrenaline rush and a chance to embrace the raw power of nature, river rafting in India promises an unforgettable and exhilarating journey, making it a must-try adventure in the country's diverse tourism offerings.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleRafting">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                River Rafting Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">The city of sages, spirituality, and serenity, Rishikesh, known as "The Yoga capital of the world," is one of the most popular destinations for adventure lovers in Uttarakhand. River rafting along the rapid flow of the Ganga River makes it a thrilling and unforgettable experience. Other places to experience river rafting in Uttarakhand include Devprayag, Rudraprayag, Mori, Chakrata, and Chamoli. Each of these locations offers different levels of rapids, with Rishikesh having the most extreme level of rapids up to level V. On the other hand, the other locations mostly have rapids ranging from level I to III, making them highly enjoyable for beginners and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                River Rafting in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Himachal is among the most suitable locations for river rafting after Uttarakhand. With many rivers originating from Himachal Pradesh, the state offers some popular rafting circuits that attract adventure tourists. The most sought-after rafting courses are found on the four rivers, including the mighty Beas River, Chenab, Ravi, and Satluj, located in Kullu & Manali, Lahaul, Chamba, and Shimla. Most of the rapids here are between levels I and III in difficulty, making them ideal for inexperienced rafters and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                River rafting in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Sikkim offers rafting courses on two rivers, the Teesta and Rangit. While the river Rangit has some extreme rapids and drops in the course, it is highly pursued by highly enthusiastic adventurers who are experts in white water rafting. On the other hand, the River Teesta has rapids ranging from easy to intense, making it compatible with families and those with intermediate rafting experience. Moreover, the rafting circuits pass through scenic surroundings and lush green forests, making it a perfect spot for adventure enthusiasts who love nature.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                River Rafting in Arunachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Arunachal, along with being an excellent place for nature and sightseeing lovers, is also a great destination for adventure buffs due to its stunning rafting courses. One of the most thrilling experiences is river rafting in the mighty Brahmaputra River and its tributaries. Rafting in Arunachal Pradesh takes you through some isolated areas and offers wonderful views amidst forests, presenting a number of challenges such as drops, rapids, and riffles.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                River Rafting in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Ladakh, a landscape paradise nestled in the mountains of India, offers great river rafting experiences in the Indus and Zanskar rivers. Famous among adventure enthusiasts, Ladakh has intermediate to intense levels of rafting courses to cater to different experience levels. While enjoying the thrill of rafting, make sure not to get too distracted by the enormously beautiful scenes of the mountains surrounding you. Stay focused and enjoy the exhilarating ride!</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/rafting-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-nature-sightseeing' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Another top activity for Incredible India explorers is nature sightseeing. Escaping the course of regular life and immersing oneself in the enormous beauty of nature and its breathtaking sights is something no one would say no to. Nature sightseeing in the Indian hill stations has captured the hearts of tourists from around the globe. The majestic Great Himalayas never fail to catch the eye of every passer-by. From Uttarakhand and Himachal Pradesh to Kashmir, Sikkim, Arunachal Pradesh, and other regions across North to South, East to West, there are some of the most preferable locations to experience the pleasing topography of nature. It's not just the mountains, but also the incredible natural diversity that makes the environment irresistible, enticing people to come back again and again.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleNature">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Uttarakhand Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">In the meadow of the Great Himalayas, lies the enormous beauty of Uttarakhand, showcased by its captivating hill stations. Uttarakhand is loved by adventure and nature tourism enthusiasts for the thrilling experiences it offers amidst the tranquil environment - quite quirky, isn't it? The state is spread from the foothills of the Himalayas to the high summits of the mountains, offering a diverse range of landscapes. From Rishikesh, the low-lying adventure hub, to the stunning topography of Auli, Uttarakhand is home to many adorable hill stations that cater to various preferences and interests. Whether you seek thrilling adventures or seek solace in the lap of nature, Uttarakhand's hill stations have something special to offer.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Himachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Himachal Pradesh has been playing the role of a summer healer for the people of the North Indian plains for a long time, spreading its charisma and calming their minds from their daily hustle. The state is home to plenty of beautiful hill stations, aboding quaint and scenic towns with pleasant landscapes. Peaking to the Himalayan peaks all the time, Himachal Pradesh, along with being the "easiest to access" of all Himalayan states, has more than many reasons to be next on your list of destinations to visit.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Kashmir Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Nothing needs to be proven when it comes to Kashmir. It is one of the most praised locations for mountain lovers, often referred to as the "Switzerland of India," gathering travel buffs from around the globe. The beauty that is often seen in pictures can be witnessed firsthand in the adorable hill stations of Kashmir. Sonmarg, Gulmarg, Pahalgam, Srinagar, Yusmarg, and many more hill stations will leave you in awe with their stunning vistas and natural charm.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Sikkhim Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">To the peaks of the Himalayas and the forests of the Western Ghats, Sikkim boasts an enormous collection of beautiful experiences within its picturesque boundaries. Sikkim's hill stations are captivating, offering a blend of stunning mountain ranges, murmuring water streams, lakes reflecting the sunshine, and cascading forests. Sikkim looks at its best throughout the year, and some of the popular hill stations here include Pelling, Gangtok, Aritar, Lachen, Namchi, Mangan, and more.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Arunachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">The untouched beauty of Arunachal Pradesh is a landscape that showcases great wildlife amid the enormous beauty of the mountains. It is the perfect place to experience mother nature at its best, as Arunachal Pradesh Hill Stations lie on the eastern edge of the country. The once-anticipated and challenging terrain now boasts accessibility to every nook and corner of the state. Hill stations in Arunachal Pradesh, providing the essence of the "Land of the Dawn," include Tawang, Bomdila, Itanagar, and Pasighat.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/nature.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-heritage-walk' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>India comes as one of the most promising countries when it comes to heritage tours. Heritage tourism is an important element of Incredible India's top things to explore in its tourism campaign to attract both international and domestic travelers. From the majestic Taj Mahal to the intricate carvings of ancient temples, India's cultural and historical tourism sights serve as a feast for heritage and history buffs. The epics of great dynasties and rulers are evident through their architectural monuments, making everyone wonder and transporting them to the bygone era. India's long history carries the stories of each era, scattered throughout the country, memorizing the presence of old happenings on the land.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleHeritage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Taj Mahal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Recognized as the face of India globally, the Taj Mahal is a beautiful epitomical structure dedicated to one of the wives of the Mughal emperor Shah Jahan. This majestic art of beauty incepts the clinging feelings of every lover to reality. This incredibly redefined white beauty never runs out of tourists, as the Taj Mahal remains a main attraction for international tourists visiting India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Ajanta & Ellora Caves
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The earliest evidence of Buddhism in India, Ajanta and Ellora caves, showcases the beautiful work of the Buddha monks from around 2000 years ago. These caves are meticulously carved in the rock, displaying an amazing understanding of art and architecture that defines the culture and beliefs of ancient India on the walls of these caves.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Khajuraho Temples
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The temple complex of Khajuraho is a testimony to the rich heritage of ancient India. Located in Madhya Pradesh, these 25 temples depict the culture and understanding of that time regarding prominent human life. During this heritage walk, you will witness beautifully carved sculptures throughout the temple walls, roofs, and even on the floors. All of these details in the buildings hold architectural significance and brilliance, making it an adorable heritage site.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Konark Sun Temple
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">At Konark Sun Temple, the language of stone surpasses the language of man. The temple is dedicated to the deity Sun and is one of the most amazing works of architectural depictions from the Kalinga Dynasty. The temple is designed in the shape of a chariot and features six horses carved on one side of the temple. It is considered one of the largest Brahmin sanctuaries and is a UNESCO world heritage site. A heritage walk to the Konark Sun Temple will amaze you and leave you in awe.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Hampi Ruins
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Situated in the Vijayanagar district of Karnataka, this site is a UNESCO world heritage site. Once a part of a prosperous kingdom, it now lies in ruins; nevertheless, it remains an amazing site to witness. You can see a collection of Dravidian-style architecture temples and other structures, all displaying intricate architectural detailing and carvings that make us wonder about the artistic significance of the old days.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/heritage-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-pilgrimage' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Renowned for its deep-rooted spirituality and diverse religious significance, India is a prime destination for spiritual souls. A plethora of sacred sites and revered temples scattered throughout the country offer profound and transformative experiences to the pilgrims. From the holy city of Varanasi, where the Ganga River is worshipped, to the yoga center of the world, Rishikesh, where people come in search of serenity and immerse themselves in devotion, India offers spiritual sanctuaries for believers of all religions. India has visiting the sacred city of Haridwar, the iconic temples of Ujjain and Puri, the Golden many religious sites to explore for Muslims, Christians, Buddhists, Jains, and Sikhs. Whether Temple of Amritsar, or the monasteries and Buddhist temples at Sarnath and Bodhgaya, India will be your place in your soul-stirring journey of devotion and spirituality.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExamplePilgrimage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Varanasi
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The spiritual capital of India, Varanasi, is one of the fondest places to visit for spiritual and pilgrimage tourism. No place could compare to the inclusive beauty and serenity of this city. One of the oldest cities in India, Varanasi is also known by other popular names like Banaras and Kashi. The sounds of chanting, temples, people, and worship everywhere are what make the scene perfect in Banaras. Also, don't miss the evening Ganga Aarti on the Ganga Ghats.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Haridwar
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The gateway to pilgrimages in India, Haridwar is one of the most visited pilgrimage sites in the country. Located on the foothills of the Himalayas, this sacred city is picture-perfect for spiritual journeys. The swiftly flowing Ganga, people making holy dips on the banks, and the markets full of religious artifacts create a natural and beautiful atmosphere in Haridwar. There are many temples to visit, but nothing should be prioritized over witnessing the mesmerizing Ganga Aarti.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Rishikesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The yoga capital of the world, Rishikesh, is no wonder one of the top pilgrimage destinations in India. Rishikesh used to be the place for meditation and daily yoga sessions of sages of India. The adorable Lakshman and Ram Jhula (Suspension bridges), Beatles Ashram, and Shivpuri are must-visit places here.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Ujjain
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">Situated on the banks of the holy Shipra river, Ujjain has plenty of pilgrimage sites to make up your tour. Also, being the home of one of the twelve Jyotirlingas, Mahakaleshwar, Ujjain welcomes many spiritual seekers to it. The serene and hospitable environment makes it a preferable place for some offbeat experiences in Madhya Pradesh. Similar to Varanasi, Ujjain too lets you dive into spirituality amidst the crowd of people.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Puri Odisha
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">One of the four holy shrines (Char Dham) of Hindus, the Shree Jagannath Temple is the main attraction of Puri. It attracts a lot of pilgrims due to its significance in the Hindu religion. Puri is also home to many other significant temples, making it a must-visit destination for a pilgrimage tour. You can explore the local culture and tradition by visiting markets and talking to the locals.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/pilgrimage-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-adventure-sports' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>When it comes to adventure tourism, India offers a plethora of adventure activities, catering to both new and expert adventurers. India stands at the forefront of adventure tourism on the global tourism map. From the towering peaks of the Himalayas to the pristine beaches of Goa, the country provides endless opportunities for adrenaline enthusiasts. Whether it's trekking the low and high hills, exploring the mighty Himalayan peaks, experiencing breathtaking views of valleys, rafting through the streams of the Ganga, snorkeling in the Andaman Sea, or engaging in thrilling cycling tours, each activity offers captivating experiences. These activities have become increasingly popular among people in India. Whether you are a beginner in the adventure world or seeking more thrilling experiences, India has a wide array of options waiting for you to explore.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleAdventure">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Paragliding
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Why always keep looking up at the mountains when you can gaze down from the high skies while paragliding? One of the most adventurous sports out there, paragliding is a must-do activity if you want to experience something exceptional. And the best part is, it's totally safe as you'll be accompanied by an expert who ensures all safety measures are taken. Mussoorie, Manali, Bir Billing, and Sanasar are some of the best-known places to enjoy this thrilling activity.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Skiing
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Who glides swiftly over the ice? Definitely, you should enjoy this thrilling adventure sport while in the mountains. The snow-capped landscape and the chilly yet exhilarating winds make skiing an unforgettable experience. The best locations to try this activity are Pahalgam and Gulmarg in Kashmir, Solang, Kufri, and Rohtang Pass in Manali, and Auli in Uttarakhand.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Mountaineering
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Mountaineering is becoming more and more popular and is undoubtedly one of the adrenaline-pumping sports you can enjoy in adventure tourism in India. It offers something out of the box, something worth remembering - a moment that could stay with you for a lifetime. Though the peaks are tough to conquer, enthusiasts won't give up. The best places to start your mountaineering experiences should be Manali and Sikkim as they have some low peaks suitable for beginners. For intermediate and experienced climbers, Ladakh, Nanda Devi, Garhwal, and Himachal (Kullu, Spiti & Kinnaur) are excellent choices.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Cycling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">How long has it been since you last rode a bicycle? Guess what, it won't be long before you start again. Cycling is a new trend in the adventure tourism world that is gaining popularity at a rapid pace. Riding with friends by your side and witnessing beautiful sights along the way is a truly memorable experience. The best part is, you are in charge and can go wherever you want. Not to mention, cycling is not only the safest but also the healthiest adventure activity. So, get ready to step on the pedal and say, "Let's Go!" Some of the tracks that you should consider for cycling through great landscapes are Chennai to Puducherry, Somnath to Diu, Coorg to Munnar, Shillong to Cherrapunji, and Manali to Leh.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Snorkelling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">India is also one of the top destinations for snorkelling adventures. You got to see what is below the water's surface? Well, snorkelling is the thing you need. The amazing underwater world is just below our feet to explore. Snorkelling is swimming on the surface of the seawater at shallow depths, keeping half of the body submerged in the water. This allows us to see marine life right before our eyes. The top places to do snorkelling in India are Andaman, Lakshadweep, Goa, and Pondicherry.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/adventure-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="best-places-to-visit" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#best-place-visit-north" role="tab" aria-controls="best-place-visit-north" aria-selected="true">
                                                        <span>01</span><br />North India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#best-place-visit-south" role="tab" aria-controls="best-place-visit-south" aria-selected="false">
                                                        <span>02</span><br />South India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#best-place-visit-east" role="tab" aria-controls="best-place-visit-east" aria-selected="false">
                                                        <span>03</span><br />East India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#best-place-visit-west" role="tab" aria-controls="best-place-visit-west" aria-selected="false">
                                                        <span>04</span><br />West India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#best-place-visit-central" role="tab" aria-controls="best-place-visit-central" aria-selected="false">
                                                        <span>05</span><br />Central India
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='best-place-visit-north' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Northern India, a marvellous wonderland region of India, holds some of the greatest places to explore. This region comprises the majestic Himalayas in the north, the Thar desert in the west, and the vast plains in the rest. Undoubtedly, the mountains offer rare landscapes to explore, as do the royal state of Rajasthan and the pilgrimage hub of Uttar Pradesh. A North India tour boasts a diverse culture, encompassing the most important Sikh pilgrimage site, The Golden Temple, significant Hindu pilgrimages like Char Dham, and Islamic mosques such as Jama Masjid. Northern India is adorned with the beauty of nature and culture, reflected in its vibrant array of colors.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the must-visit tourist attractions on a North India tour are:</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleNorthVisit">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Taj Mahal - Agra, Uttar Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthVisit">
                                                                            <div class="accordion-body">The more you see it, the more beautiful it looks. The Taj Mahal is undoubtedly a masterpiece dedicated to love, which continues to evoke the emotions felt by many who are in love. As a UNESCO World Heritage site and India's most famous monument, it remains a timeless place to spend time with your loved ones. It is a must-visit place in any North India travel guide.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Jsipur - The Pink City, Rajasthan
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthVisit">
                                                                            <div class="accordion-body">Renowned as the "Pink City" for its buildings painted in pink, Jaipur, the capital city, boasts a wealth of historic splendors. It showcases some of the finest architectural marvels from the royal era, including magnificent forts, palaces, and impeccably designed buildings that captivate the eyes. From the enchanting mornings to the golden sunsets, Jaipur turns everything into gold, resembling the mythical philosopher's stone. It is a highlight of India tourism.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Varanasi - Spirtual City on the Banks of the River Ganges, Uttar Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthVisit">
                                                                            <div class="accordion-body">Varanasi, the oldest city that has preserved its ancient charm, takes you on a journey back in time. Situated along the banks of the revered Ganges River, Varanasi is known by various names such as Banaras and Kashi. It is renowned for its serenity and is home to the Jyotirlingas, a significant Hindu pilgrimage site including the Vishwanath Mandir. Witness the rituals performed on the ghats, including cremations, and experience the incredible spirituality of the place. Incredible India.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/north-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='best-place-visit-south' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>South India is a captivating region of India that offers a plethora of awe-inspiring sites for travelers. With its rich history, cultural heritage, and natural wonders, it presents an irresistible charm. The architectural marvels of South India, such as the grand temples of Tamil Nadu, the intricate carvings of Hampi in Karnataka, and the magnificent palaces of Kerala, leave visitors in awe. The region's diverse landscapes are equally mesmerizing, from the serene backwaters of Kerala to the lush tea plantations of Munnar, the breathtaking hill stations of Ooty and Kodaikanal, and the pristine beaches of Kerala and Tamil Nadu. South India spoils travelers with a variety of stunning vistas. Whether exploring ancient temples, indulging in rejuvenating Ayurvedic treatments, embarking on wildlife safaris, or simply immersing in the serenity of nature, a South India tour promises a truly remarkable travel experience that lingers in the hearts of travelers long after their journey ends.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the Most Popular Tourist Places in the South India Travel Guide</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleSouthVisit">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Munnar - Kerala
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthVisit">
                                                                            <div class="accordion-body">Welcome to the picturesque hill station of munnar, nestled amidst the mist-shrouded mountains of Kerala, India. Beyond its breathtaking landscapes, Munnar offers a plethora of immersive experiences that will leave you spellbound. Embark on a tea plantation tour and delve into the fascinating world of tea production, from plucking the leaves to savoring a freshly brewed cup. Indulge in the serenity of a spice garden, where fragrant aromas infuse the air, and learn about the diverse spices that make Kerala cuisine so irresistible. Take a leisurely stroll through the vibrant local markets, engaging with friendly vendors and sampling delectable street food. Finally, surrender to the tranquility of Munnar's cascading waterfalls, where nature's symphony soothes your soul. Munnar is a sensory delight, offering unforgettable experiences at every turn. Plan your visit to Munnar in Kerala, South India for an incredible journey.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Meenakshi Temple - Madurai, Tamil Nadu
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthVisit">
                                                                            <div class="accordion-body">Visiting the Meenakshi Temple in Madurai , Tamil Nadu is an immersive journey into a world of divine splendor and architectural brilliance. The ornate gopurams beckon with their vibrant sculptures, leading you into a sacred realm. Inside, a labyrinth of halls and shrines adorned with intricate carvings awaits, evoking a sense of awe. The Hall of Thousand Pillars mesmerizes with its grandeur. Chants, incense, and devotional music fill the air, heightening the spiritual ambiance. This cultural hub is not only a place of worship but also a celebration of traditions and festivals. A pilgrimage to the Meenakshi Temple is an experience that nourishes the soul and leaves an indelible mark. Plan your India tour for a religious vacation and explore the rich heritage of temples in India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Hampi-Karnataka
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthVisit">
                                                                            <div class="accordion-body">Welcome to Hampi, a UNESCO World Heritage Site nestled in the heart of Karnataka, India. Prepare to be transported to a bygone era as you wander through the remnants of a once-flourishing Vijayanagara Empire. Hampi's surreal landscape, dotted with majestic boulders, ancient temples, and crumbling ruins, creates a mesmerizing setting. The Virupaksha Temple, with its towering gopuram, stands as a testament to the architectural brilliance of the past. As you explore the scattered remnants of palaces, step wells, and monolithic structures, you'll feel a sense of wonder and reverence for the history and artistic marvels that unfolded here. Hampi is a captivating destination that immerses you in a captivating tapestry of heritage, spirituality, and breathtaking landscapes. Plan your Hampi South India Heritage Tour and explore the rich history and cultural treasures of India.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/munnar-culture.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='best-place-visit-east' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Tourism in Eastern India is a treasure trove of diverse and enchanting experiences that will leave any traveler spellbound. From the misty hills of Darjeeling to the vibrant culture of Kolkata, and from the pristine beauty of the Sundarbans to the spiritual aura of Puri's Jagannath Temple, this region offers something for every wanderer. The stunning landscapes of the Northeast, with its cascading waterfalls, emerald-green tea plantations, and mesmerizing valleys, beckon adventure enthusiasts and nature lovers alike. In Meghalaya, one can explore the living root bridges and hidden caves of Cherrapunji, while in Arunachal Pradesh, the mystical town of Tawang showcases ancient monasteries and breathtaking vistas of the Eastern Himalayas. The serene beauty of Sikkim's Gangtok, with its monastic charm and panoramic views of snow-capped peaks, is a visual delight. A North East India tour allows travelers to explore the unexplored, embrace diverse cultures, and revel in the breathtaking beauty of nature. It is a journey that not only ignites the senses but also nurtures the soul, leaving a lasting impression of the region's captivating allure.  </p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the Best Places to Visit in East & Northeast India Travel Guide Itinerary-</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleEastVisit">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Darjeeling-West Bengal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastVisit">
                                                                            <div class="accordion-body">Darjeeling, nestled in the picturesque hills of West Bengal, offers a delightful array of sightseeing opportunities. The town is renowned for its breathtaking views of the snow-capped Kanchenjunga, the third-highest peak in the world. The iconic Darjeeling Himalayan Railway, a UNESCO World Heritage Site, takes visitors on a memorable journey through quaint tea gardens and charming hillside villages. The vibrant Mall Road is a bustling hub of shops, cafes, and restaurants, offering a taste of local culture and cuisine. The Japanese Peace Pagoda and the Padmaja Naidu Himalayan Zoological Park, known for its red pandas, are popular attractions. Adventure enthusiasts can indulge in trekking, paragliding, and river rafting. Darjeeling's tea estates invite visitors to savor the world-famous Darjeeling tea, while the sunrise at Tiger Hill offers a mesmerizing spectacle. Darjeeling truly encapsulates the beauty of the Himalayas and provides an enchanting experience for all who visit. With its popularity as one of the popular tourist destinations in India, a Darjeeling West Bengal tour promises an unforgettable journey through captivating landscapes and rich cultural heritage.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Sundarbans National Park-West Bengal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastVisit">
                                                                            <div class="accordion-body">The Sundarbans National Park, located in West Bengal, is one of the main wildlife attractions in East India. This exclusive and captivating destination draws visitors from around the world. As the largest mangrove forest in the world and a UNESCO World Heritage Site, the park's unique ecosystem offers a home to the majestic Royal Bengal Tiger, making it a prime tiger habitat. Exploring the dense mangrove forests on a boat safari allows visitors to witness the rich biodiversity, spot various species of birds, and even catch a glimpse of the elusive tigers. The interconnected network of waterways creates a surreal ambiance, with the serene beauty of the mangroves adding to the allure. Spending a holiday in Sundarbans National Park offers a rare opportunity to experience the mystical charm of a mangrove forest and encounter one of nature's most iconic predators. It truly is an exclusive and unforgettable place to visit.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Jagannath Temple, Odhisha
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastVisit">
                                                                            <div class="accordion-body">The Jagannath Temple, located in Puri, Odisha, is the most visited religious attraction in Eastern India. This holy site is awe-inspiring and spiritually significant, making it truly worth a visit. Dedicated to Lord Jagannath, an incarnation of Lord Vishnu, the temple holds immense religious importance for devotees. The architectural grandeur of the temple is breathtaking, with its towering spires and intricate carvings showcasing the rich heritage of Odisha's craftsmanship. The annual Rath Yatra, or Chariot Festival, attracts millions of devotees from all over the world, making it a vibrant and culturally significant event. The temple's sanctity, coupled with its vibrant festivities and religious rituals, creates an atmosphere of devotion and spirituality that leaves a lasting impact on visitors. It is not only a remarkable architectural masterpiece but also a place where one can experience the fervor of devotion and immerse themselves in the rich cultural traditions of Odisha. The Jagannath Temple in Odisha is undoubtedly one of the top 10 tourist points of interest in the state, reflecting its significance and appeal to both religious and cultural enthusiasts alike.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/east-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='best-place-visit-west' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The western region of India holds immense significance for travelers, offering captivating tourist attractions, a blend of history, culture, and natural wonders. From the bustling streets of Mumbai to the architectural marvels of Gujarat and the serene beaches of Goa, the region offers a myriad of experiences. Mumbai, the financial and entertainment capital of India, serves as a melting pot of cultures, showcasing the vibrant spirit of the country. Gujarat, with its rich heritage, beckons travelers with magnificent palaces, stepwells, and ancient temples. Goa, known for its pristine beaches and lively nightlife, remains a favorite destination for both domestic and international travelers. The top things to do in a Western India tour include vibrant festivals like Navratri and Diwali, indulging in lip-smacking street food, and experiencing the warm hospitality of the locals. The western region of India offers an enchanting travel experience that leaves a lasting impression on visitors.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Some of the top places and attractions to visit on a West India tour are:</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleWestVisit">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Mumbai, Maharashtra
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestVisit">
                                                                            <div class="accordion-body">Embark on a whirlwind adventure through the vibrant metropolis of Mumbai, Maharashtra, where the pulse of India beats in harmony with the rhythm of life. Feel the energy surge through your veins as you navigate the bustling streets, where a kaleidoscope of colors, sounds, and aromas engulfs your senses. Explore the historic landmarks like the iconic Gateway of India and the majestic Chhatrapati Shivaji Terminus, witnessing the amalgamation of colonial and contemporary architecture. Indulge your taste buds with mouthwatering street food, from spicy vada pav to delectable pav bhaji. Lose yourself in the vibrant markets of Colaba and Crawford, where treasures await at every turn. And as the sun sets, revel in the glitz and glamour of Bollywood, catching a glimpse of the stars on Marine Drive. Visiting Mumbai is an exhilarating experience that will leave an indelible imprint on your soul, a symphony of chaos and charm that defines the spirit of this extraordinary city. Mumbai, Maharashtra is a must-visit destination for anyone exploring India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Ajanta and Ellora Caves, Maharashtra
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestVisit">
                                                                            <div class="accordion-body">Embarking on a journey to the ancient wonders of Ajanta and Ellora Caves in Aurangabad, Maharashtra, is akin to stepping into a mystical time capsule. As you approach these awe-inspiring rock-cut caves, a sense of anticipation and wonder will fill your heart. Inside, you will be transported to a bygone era, where masterful craftsmanship and artistic brilliance unfold before your eyes. The intricate carvings, vibrant murals, and grand sculptures will evoke a profound sense of awe and admiration. Wandering through the dimly lit chambers, you will feel a deep connection to the past, as if the stories of the gods and goddesses depicted on the walls</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Goa-Beaches and Portuguese Architecture
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestVisit">
                                                                            <div class="accordion-body">Embark on a journey to the vibrant paradise of Goa, where sun-kissed beaches, pulsating nightlife, and a laid-back atmosphere merge to create an unforgettable experience. Feel the warm sand beneath your feet as you stroll along the pristine shores, with the rhythmic waves serenading your senses. Indulge in thrilling water sports, from surfing to parasailing, or simply bask in the glorious sunshine and soak up the tropical vibes. Explore the charming streets of Old Goa, where colonial architecture and ancient churches transport you to a bygone era. Admire the intricate details and grandeur of Portuguese-inspired buildings, a testament to Goa's rich historical heritage. Lose yourself in the narrow lanes and vibrant markets, where a blend of Indian and European influences creates a unique cultural fusion. As night falls, immerse yourself in the infectious energy of Goa's legendary parties, where music fills the air and carefree spirits come alive. Dance the night away under the starry sky, creating memories that will last a lifetime. Goa is a symphony of relaxation, adventure, and endless possibilities, leaving you with memories that will linger long after you've bid farewell to its enchanting shores. As you plan your West India travel, make sure to include beach tours in India and refer to the comprehensive West India Travel Guide for an unforgettable Goa experience.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/west-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='best-place-visit-central' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Touring Central India, specifically Madhya Pradesh, means stepping into a distinctive world ruled by wilderness and history. This vast land, predominantly dedicated to wildlife, makes it a favorite and almost a paradise for nature, wildlife, and adventure enthusiasts, especially those who adore tigers. Moreover, the "Heart of India" holds great historical significance. It is adorned with remarkable historical structures and captivating tales that leave you wanting more. Additionally, the spiritual significance of Central India cannot be overlooked, with sacred ghats in Ujjain, the Kumbh Mela on the Shipra River, and ancient Buddhist stupas in Sanchi. Visiting Central India promises an unforgettable tourism holiday experience.</p>
                                                            </div>
                                                            <div>
                                                                <h4 className='fs-5 fw-bolder'>Here are some of the most recommended places to visit in the Central India travel guide:</h4>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleHeritage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Khajuraho Temple, Madhya Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The architecture of these 1000-year-old temples still withstands the force of nature to the fullest. This great site, spread over 20 square kilometers, will surely amaze you. Known for their temples built with marvelous architectural sense and geometrical references, they showcase intricate sculpture designs all over, including walls, pillars, and the ground. The artwork is so precise that people are unable to notice the little details made in the carvings. These temples are dedicated to the deities Shiva and Shakti, and they depict the essence of human life through their architecture. In terms of India Tourism, Khajuraho temple could be referred to as an underappreciated marvel of the ancient civilizations.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Kanha National Park-Madhya Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Kanha National Park, located in central India, is one of the most admired places for wildlife and adventure lovers. It is truly a grand paradise. The park is rich with diverse flora and fauna, and it serves as a habitat for many endangered and rarely seen animals. Additionally, it is a tiger reserve, boasting a population of over 100 Bengal Tigers within its expansive area spanning more than 2000 sq. km. Other major species that can be found here include Barasingha, Leopards, Wild boars, Bears, and Indian pythons, among others. Kanha National Park is a popular destination for wildlife tourism, attracting visitors from all over the world.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Gwalior Fort, Madhya Pradesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The Gwalior Fort, a gigantic fortress in Gwalior, is said to have been dedicated to a sage named "Gwalipa" by King Suraj Singh, after the sage cured them of leprosy. However, beyond the legends, the fort dates back to the 6th century and has witnessed numerous attacks and wars, yet it still stands strong. Perched on an elevated hill, high above the city, Gwalior Fort provides a commanding view of all the other attractions in the vicinity. Gwalior Fort is a significant heritage tourism site, attracting visitors who are eager to explore its historical and cultural importance.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/central-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-pilgrimage' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Renowned for its deep-rooted spirituality and diverse religious significance, India is a prime destination for spiritual souls. A plethora of sacred sites and revered temples scattered throughout the country offer profound and transformative experiences to the pilgrims. From the holy city of Varanasi, where the Ganga River is worshipped, to the yoga center of the world, Rishikesh, where people come in search of serenity and immerse themselves in devotion, India offers spiritual sanctuaries for believers of all religions. India has visiting the sacred city of Haridwar, the iconic temples of Ujjain and Puri, the Golden many religious sites to explore for Muslims, Christians, Buddhists, Jains, and Sikhs. Whether Temple of Amritsar, or the monasteries and Buddhist temples at Sarnath and Bodhgaya, India will be your place in your soul-stirring journey of devotion and spirituality.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExamplePilgrimage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Varanasi
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The spiritual capital of India, Varanasi, is one of the fondest places to visit for spiritual and pilgrimage tourism. No place could compare to the inclusive beauty and serenity of this city. One of the oldest cities in India, Varanasi is also known by other popular names like Banaras and Kashi. The sounds of chanting, temples, people, and worship everywhere are what make the scene perfect in Banaras. Also, don't miss the evening Ganga Aarti on the Ganga Ghats.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Haridwar
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The gateway to pilgrimages in India, Haridwar is one of the most visited pilgrimage sites in the country. Located on the foothills of the Himalayas, this sacred city is picture-perfect for spiritual journeys. The swiftly flowing Ganga, people making holy dips on the banks, and the markets full of religious artifacts create a natural and beautiful atmosphere in Haridwar. There are many temples to visit, but nothing should be prioritized over witnessing the mesmerizing Ganga Aarti.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Rishikesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The yoga capital of the world, Rishikesh, is no wonder one of the top pilgrimage destinations in India. Rishikesh used to be the place for meditation and daily yoga sessions of sages of India. The adorable Lakshman and Ram Jhula (Suspension bridges), Beatles Ashram, and Shivpuri are must-visit places here.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Ujjain
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">Situated on the banks of the holy Shipra river, Ujjain has plenty of pilgrimage sites to make up your tour. Also, being the home of one of the twelve Jyotirlingas, Mahakaleshwar, Ujjain welcomes many spiritual seekers to it. The serene and hospitable environment makes it a preferable place for some offbeat experiences in Madhya Pradesh. Similar to Varanasi, Ujjain too lets you dive into spirituality amidst the crowd of people.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Puri Odisha
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">One of the four holy shrines (Char Dham) of Hindus, the Shree Jagannath Temple is the main attraction of Puri. It attracts a lot of pilgrims due to its significance in the Hindu religion. Puri is also home to many other significant temples, making it a must-visit destination for a pilgrimage tour. You can explore the local culture and tradition by visiting markets and talking to the locals.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/pilgrimage-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-adventure-sports' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>When it comes to adventure tourism, India offers a plethora of adventure activities, catering to both new and expert adventurers. India stands at the forefront of adventure tourism on the global tourism map. From the towering peaks of the Himalayas to the pristine beaches of Goa, the country provides endless opportunities for adrenaline enthusiasts. Whether it's trekking the low and high hills, exploring the mighty Himalayan peaks, experiencing breathtaking views of valleys, rafting through the streams of the Ganga, snorkeling in the Andaman Sea, or engaging in thrilling cycling tours, each activity offers captivating experiences. These activities have become increasingly popular among people in India. Whether you are a beginner in the adventure world or seeking more thrilling experiences, India has a wide array of options waiting for you to explore.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleAdventure">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Paragliding
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Why always keep looking up at the mountains when you can gaze down from the high skies while paragliding? One of the most adventurous sports out there, paragliding is a must-do activity if you want to experience something exceptional. And the best part is, it's totally safe as you'll be accompanied by an expert who ensures all safety measures are taken. Mussoorie, Manali, Bir Billing, and Sanasar are some of the best-known places to enjoy this thrilling activity.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Skiing
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Who glides swiftly over the ice? Definitely, you should enjoy this thrilling adventure sport while in the mountains. The snow-capped landscape and the chilly yet exhilarating winds make skiing an unforgettable experience. The best locations to try this activity are Pahalgam and Gulmarg in Kashmir, Solang, Kufri, and Rohtang Pass in Manali, and Auli in Uttarakhand.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Mountaineering
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Mountaineering is becoming more and more popular and is undoubtedly one of the adrenaline-pumping sports you can enjoy in adventure tourism in India. It offers something out of the box, something worth remembering - a moment that could stay with you for a lifetime. Though the peaks are tough to conquer, enthusiasts won't give up. The best places to start your mountaineering experiences should be Manali and Sikkim as they have some low peaks suitable for beginners. For intermediate and experienced climbers, Ladakh, Nanda Devi, Garhwal, and Himachal (Kullu, Spiti & Kinnaur) are excellent choices.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Cycling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">How long has it been since you last rode a bicycle? Guess what, it won't be long before you start again. Cycling is a new trend in the adventure tourism world that is gaining popularity at a rapid pace. Riding with friends by your side and witnessing beautiful sights along the way is a truly memorable experience. The best part is, you are in charge and can go wherever you want. Not to mention, cycling is not only the safest but also the healthiest adventure activity. So, get ready to step on the pedal and say, "Let's Go!" Some of the tracks that you should consider for cycling through great landscapes are Chennai to Puducherry, Somnath to Diu, Coorg to Munnar, Shillong to Cherrapunji, and Manali to Leh.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Snorkelling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">India is also one of the top destinations for snorkelling adventures. You got to see what is below the water's surface? Well, snorkelling is the thing you need. The amazing underwater world is just below our feet to explore. Snorkelling is swimming on the surface of the seawater at shallow depths, keeping half of the body submerged in the water. This allows us to see marine life right before our eyes. The top places to do snorkelling in India are Andaman, Lakshadweep, Goa, and Pondicherry.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/adventure-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="arts-culture-history" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#art-culture-history-north" role="tab" aria-controls="art-culture-history-north" aria-selected="true">
                                                        <span>01</span><br />North India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#art-culture-history-south" role="tab" aria-controls="art-culture-history-south" aria-selected="false">
                                                        <span>02</span><br />South India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#art-culture-history-east" role="tab" aria-controls="art-culture-history-east" aria-selected="false">
                                                        <span>03</span><br />East India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#art-culture-history-west" role="tab" aria-controls="art-culture-history-west" aria-selected="false">
                                                        <span>04</span><br />West India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#art-culture-history-central" role="tab" aria-controls="art-culture-history-central" aria-selected="false">
                                                        <span>05</span><br />Central India
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='art-culture-history-north' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Through various dance forms, music, paintings, and literature, we are better able to learn more about the practices and beliefs of a culture. Art is just one aspect of the culture of a community. Art and culture are essential for the survival of a civilization, but they also function as a means to understand history. Talking about the country of India, it is one of the largest countries in the world, both in terms of area and population. It also has one of the most diverse mixes of cultures, which makes every region of the country stand out. The region of North India has been at the forefront of India's fight for freedom. The various states in the area, with their different topographies, bring in different variations in culture even though they are in close proximity to each other. For example, if we look at the mountainous region of Uttarakhand, Ladakh, Jammu & Kashmir, and Himachal Pradesh, they create and wear traditionally woven beautiful Pankhi and Pashmina Shawls, which keep them warm during the harsh winters. Himachal is also known for its Angora wool Shawls, made from the soft coats of Angora rabbits. On the other hand, the Kota Doria fabric of Rajasthan is more suitable for the state's weather, being a light and airy material perfect for summers.</p>
                                                                <p>Rajasthan is also known for its puppetry art or "Kathputli," originally used for entertainment, which later became a medium to depict various socio-cultural issues as well. Rajasthan is also home to another famous fort called the Bandhavgarh Fort, infamous for being one of the haunted places in the country! Known for its display of sound and emotion, the Ragamala Paintings of the state are also highly cherished.</p>
                                                            </div>
                                                            <div>
                                                                {/* <div class="accordion accordion-flush pt-3" id="accordionFlushExampleTrekking">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Trekking in Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Trekker's paradise, Uttarakhand, stands out among all the Himalayan states in India, offering the most trekking trails that become increasingly adventurous as you move on to the next. The state boasts some of the most beautiful and scenic treks, such as Har Ki Dun and Kedarkantha, as well as pilgrimage treks like Tungnath-Chandrashila and Kedarnath trek. For extreme trek lovers, Uttarakhand also offers high-altitude treks like Roop Kund, reaching an altitude of more than 5000m.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Trekking in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ideal for backpackers and flashpackers, Himachal Pradesh is no less than a heaven for trekking. The state has already gained high popularity among the youth and Gen Z for trekking and other adventures, as the hill stations are easily accessible and well-equipped with all facilities. Adorable mountains, adventurous terrains, and economic options are the qualities that will make Himachal Pradesh your next adventure getaway.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Trekking in Kashmir
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Kashmir is an unbelievably beautiful wonderland in India, offering some of the most breathtaking scenic treks that people from around the world come to enjoy. It tops the list of many adventure travelers and trekking enthusiasts for its unparalleled and distinctive treks. Gulmarg, Sonmarg, Pahalgam, and Yusmarg are the main bases that provide treks showcasing the Kashmir valley from within and from deep within its heart.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Trekking in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ladakh challenges trekkers in its own unique way but rewards them with the opportunity to witness the enormous beauty of its gigantic mountains, an experience not everyone can be a part of. Although the terrain is rough, dry, demanding, and gritty, trekking enthusiasts conquer it time and again. Unlike treks in other Himalayan states, treks in Ladakh are mostly at high altitudes. While there are several short treks, there are more long and intense ones. However, the best part of all is exploring this remote location while disconnecting yourself from the rest of the world.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Trekking in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Nestled in the might of the enormous Kanchenjunga, Sikkim boasts some truly majestic trekking routes, offering unparalleled beauty amidst nature. The trails are enveloped by lush green wildlife, occasionally granting lucky trekkers sightings of beautiful creatures like musk deer and the exotic red panda. With nearly fifteen treks to choose from in Sikkim, each one promising a unique adventure, including the mighty Kanchenjunga, never fail to enthrall and captivate trekkers, making it an unforgettable experience.</div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/north-culture.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='art-culture-history-south' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The Southern region of India is enriched from an arts, culture, and history perspective. It is home to a number of classical dances such as Bharatanatyam, Kuchipudi, Kathakali, and Mohiniyattam, each showcasing its own unique style and narrative. The region is also famously known for its exquisite Kancheepuram, Ikat, and the white and gold Kasavu Silk sarees, which are admired for their craftsmanship and elegance. The renowned painter Raja Ravi Varma also hails from Southern India, specifically from Kerala. His paintings are still cherished today for their display of Indian storytelling through European art and aesthetics, capturing the essence of mythological tales and cultural scenes. Originating in the 16th century in India, the Deccani style of miniature paintings grew in popularity during the Islamic reign and showcased the Persian style of art in its initial stages before Indian artists took over, resulting in a fascinating fusion of influences.</p>
                                                                <p>South India is also known for its various handicrafts, such as the Aranmula Metal Mirror, Coir work, Palm leaf work, Seashell carving, and the fragrant Sandalwood carving. The region is also famous for creating the Urumi Whip Sword, a unique bladed weapon designed like a whip, known for its complexity and challenge in maneuvering. It originated in the states of Kerala and Tamil Nadu and is presently used in the native martial arts of Kalaripayattu. Tamil Nadu and Kerala also celebrate prominent harvest festivals of the region, Pongal and Onam, respectively, which showcase the cultural richness and traditions of the southern states</p>
                                                            </div>
                                                            <div>
                                                                {/* <div class="accordion accordion-flush pt-3" id="accordionFlushExampleWildlife">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Ranthambore National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">The Rajasthani royal dignity, Ranthambore National Park, is an excellent wildlife destination for safaris, wildlife experiences, and, of course, spotting the Bengal Tigers. The park boasts a good density of these big cats, but spotting one wandering around is still a matter of luck. Ranthambore is also home to many other species of flora and fauna</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Kanha National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Kanha National Park, in case you didn't know, was the jungle that inspired the famous novel "The Jungle Book" by Rudyard Kipling. This renowned national park in Madhya Pradesh is well-known for its diverse wildlife, featuring many special attractions such as Barasingha, Panther, Blackbuck, Chital, Sambar, and Barking deer, yet your eyes won't stop seeking Bengal Tigers. Fortunately, there is a fair chance of spotting tigers here, as the park has a high density of almost 7 tigers per 100 sq. km.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Corbett National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">"You are lucky if you spot tigers, but unlucky if not in Jim Corbett National Park." On the bucket list of many, Jim Corbett National Park is one of the oldest and well-known national parks in India. A perfect paradise for wildlife and nature lovers, the park is blessed by mother nature and offers great chances for tiger sightings. Along with the highest number of tigers, the park also boasts beautiful landscapes and is home to many other remarkable species, such as sloth bears, Asiatic black bears, jungle cats, elephants, wild boars, chitals (spotted deer), barking deer, and nilgai (Indian antelope).</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Bandhavgarh National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Bandhavgarh National Park, with a gigantic area spanning 1500 sq. kilometers, is perpetually a remarkable forest in the heart of India, Madhya Pradesh. This vast forest is filled with small and large animals, each with its own captivating tales. The majestic sounds of nature and the wild speaking of its existence will amaze you while being in Bandhavgarh National Park. You will find plenty of wild animals in the vicinity, including Leopards, Sambar, Barking Deer, Wild Boar, Gaur, Chausingha, and Chinkara, as well as the Asiatic jackal, Bengal fox, striped hyena, jungle cat, leopard, and the Bengal tiger.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Tadoba National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">A feeling of thrill upon entering the gates, a sense of connection while driving through the forest and encountering wild creatures, and the captivating experience of spotting tigers are what make your trip to Tadoba National Park truly memorable. Located in central India, Tadoba National Park boasts thriving wildlife, offering abundant sightings of animals such as leopards, Jungle Cats, Sloth bears, Sambars, Spotted deer, and around 190 species of birds.

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/kathakali-culture.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='art-culture-history-east' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The states of Odisha, Jharkhand, and West Bengal in the eastern part of India are among the top five states with the highest coal reserves in the country. Home to the buildings of Nalanda Mahavira, East India is a marvel with elaborate and beautiful structures such as the Mahabodhi Temple Complex in Bihar, which is a prominent site of Buddhism, built during the reign of Emperor Ashoka of the Mauryan Empire. The Konark Sun Temple of Odisha is considered a UNESCO World Heritage Site. Dedicated to the Sun God Surya, the temple is built as a Chariot with twenty-four wheels led by horses. East India is also known for its popular classical dance known as Odissi, along with its folk dances of Jat-Jatin and Santhali. Jat-Jatin is performed by women in the Mithila region of Bihar during the monsoon season, whereas Santhali is performed by the Santhal tribes of Jharkhand. Also famous is the Chhau dance of West Bengal. It is an open-air dance/performance with its origin in martial arts and tribal traditions. It depicts instances from epics like the Mahabharata and the Ramayana. Talking about martial arts, Odisha has its own martial art known as Paika. Chhau uses movements from this art.</p>
                                                                <p>Paika is a very old form of martial arts and can be compared to the Kalaripayattu of Kerala and foreign martial arts like Wushu and Judo. Bihar in East India is known for its Madhubani wall paintings as well. Originated in Mithila, it dates back to the age of the Ramayana. The themes of the paintings vary but revolve around love and fertility and include deities, sun, moon, flora, and fauna, etc. Although it is a style of wall painting, these are now painted on various mediums. Another art form of this region of the country is the Patachitra art form, known for its bold lines and strokes, and painted on a scroll to present a story. The Batik art style of West Bengal is a unique one with its usage of dyes and wax to paint a picture.</p>
                                                            </div>
                                                            <div>
                                                                {/* <div class="accordion accordion-flush pt-3" id="accordionFlushExampleRafting">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                River Rafting Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">The city of sages, spirituality, and serenity, Rishikesh, known as "The Yoga capital of the world," is one of the most popular destinations for adventure lovers in Uttarakhand. River rafting along the rapid flow of the Ganga River makes it a thrilling and unforgettable experience. Other places to experience river rafting in Uttarakhand include Devprayag, Rudraprayag, Mori, Chakrata, and Chamoli. Each of these locations offers different levels of rapids, with Rishikesh having the most extreme level of rapids up to level V. On the other hand, the other locations mostly have rapids ranging from level I to III, making them highly enjoyable for beginners and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                River Rafting in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Himachal is among the most suitable locations for river rafting after Uttarakhand. With many rivers originating from Himachal Pradesh, the state offers some popular rafting circuits that attract adventure tourists. The most sought-after rafting courses are found on the four rivers, including the mighty Beas River, Chenab, Ravi, and Satluj, located in Kullu & Manali, Lahaul, Chamba, and Shimla. Most of the rapids here are between levels I and III in difficulty, making them ideal for inexperienced rafters and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                River rafting in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Sikkim offers rafting courses on two rivers, the Teesta and Rangit. While the river Rangit has some extreme rapids and drops in the course, it is highly pursued by highly enthusiastic adventurers who are experts in white water rafting. On the other hand, the River Teesta has rapids ranging from easy to intense, making it compatible with families and those with intermediate rafting experience. Moreover, the rafting circuits pass through scenic surroundings and lush green forests, making it a perfect spot for adventure enthusiasts who love nature.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                River Rafting in Arunachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Arunachal, along with being an excellent place for nature and sightseeing lovers, is also a great destination for adventure buffs due to its stunning rafting courses. One of the most thrilling experiences is river rafting in the mighty Brahmaputra River and its tributaries. Rafting in Arunachal Pradesh takes you through some isolated areas and offers wonderful views amidst forests, presenting a number of challenges such as drops, rapids, and riffles.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                River Rafting in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Ladakh, a landscape paradise nestled in the mountains of India, offers great river rafting experiences in the Indus and Zanskar rivers. Famous among adventure enthusiasts, Ladakh has intermediate to intense levels of rafting courses to cater to different experience levels. While enjoying the thrill of rafting, make sure not to get too distracted by the enormously beautiful scenes of the mountains surrounding you. Stay focused and enjoy the exhilarating ride!</div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/mahabodhi-culture.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='art-culture-history-west' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>This region of the country boasts about having the longest coastline in the country, which is in Gujarat. The state of Maharashtra is famous for its celebration of Ganesh Chaturthi, a weeklong festival during which the idols of Lord Ganesha are welcomed and worshipped in homes for four to five days, after which they are immersed in a water body during the time of Visarjan. Maharashtra is also known for its high-quality Paithani Silk sarees, which give off a kaleidoscopic appearance due to their intricate weaving. The Kolhapuri chappals, a kind of footwear made out of leather, are also famous handicrafts of the State, originating from the Maharashtrian town of Kolhapur. Gujarat in western India is recognized for its Bandhani printed Fabric made using the Tie & Dye technique. Along with these, the coastal town of Diu is known for its jewelry made out of tortoise shells, which are sustainable in nature since these shells are found in abundance on the town’s shores.</p>
                                                                <p>Popular folk dances of the region include the Garba and Dandiya of Gujarat and Lavni of Maharashtra. Garba is a traditional folk dance performed during the festival of Navratri in honor of Goddess Durga. Garba is performed prior to the worship, and Dandiya, played with a pair of sticks, is performed after. The Maharashtrian dance of Lavni was originally considered an erotic dance and was considered derogatory. But over time, it has evolved into a performance art from what it originally was.</p>
                                                            </div>
                                                            <div>
                                                                {/* <div class="accordion accordion-flush pt-3" id="accordionFlushExampleNature">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Uttarakhand Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">In the meadow of the Great Himalayas, lies the enormous beauty of Uttarakhand, showcased by its captivating hill stations. Uttarakhand is loved by adventure and nature tourism enthusiasts for the thrilling experiences it offers amidst the tranquil environment - quite quirky, isn't it? The state is spread from the foothills of the Himalayas to the high summits of the mountains, offering a diverse range of landscapes. From Rishikesh, the low-lying adventure hub, to the stunning topography of Auli, Uttarakhand is home to many adorable hill stations that cater to various preferences and interests. Whether you seek thrilling adventures or seek solace in the lap of nature, Uttarakhand's hill stations have something special to offer.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Himachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Himachal Pradesh has been playing the role of a summer healer for the people of the North Indian plains for a long time, spreading its charisma and calming their minds from their daily hustle. The state is home to plenty of beautiful hill stations, aboding quaint and scenic towns with pleasant landscapes. Peaking to the Himalayan peaks all the time, Himachal Pradesh, along with being the "easiest to access" of all Himalayan states, has more than many reasons to be next on your list of destinations to visit.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Kashmir Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Nothing needs to be proven when it comes to Kashmir. It is one of the most praised locations for mountain lovers, often referred to as the "Switzerland of India," gathering travel buffs from around the globe. The beauty that is often seen in pictures can be witnessed firsthand in the adorable hill stations of Kashmir. Sonmarg, Gulmarg, Pahalgam, Srinagar, Yusmarg, and many more hill stations will leave you in awe with their stunning vistas and natural charm.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Sikkhim Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">To the peaks of the Himalayas and the forests of the Western Ghats, Sikkim boasts an enormous collection of beautiful experiences within its picturesque boundaries. Sikkim's hill stations are captivating, offering a blend of stunning mountain ranges, murmuring water streams, lakes reflecting the sunshine, and cascading forests. Sikkim looks at its best throughout the year, and some of the popular hill stations here include Pelling, Gangtok, Aritar, Lachen, Namchi, Mangan, and more.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Arunachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">The untouched beauty of Arunachal Pradesh is a landscape that showcases great wildlife amid the enormous beauty of the mountains. It is the perfect place to experience mother nature at its best, as Arunachal Pradesh Hill Stations lie on the eastern edge of the country. The once-anticipated and challenging terrain now boasts accessibility to every nook and corner of the state. Hill stations in Arunachal Pradesh, providing the essence of the "Land of the Dawn," include Tawang, Bomdila, Itanagar, and Pasighat.</div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/ganesh.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='art-culture-history-central' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The central part of India, containing Chhattisgarh and Madhya Pradesh, is home to the largest number of tribals in the country. The region hosts a five-day Lokrang Festival every year to honor and celebrate the rich tribal and folk traditions of the country. Although the region does not have its own classical dances, folk dances like Panthi, Maanch, Jawara, and the Matki Dance are quite popular. The state of Madhya Pradesh is famous for its fabric of Chanderi Silk, a light yet strong material made by weaving together a blend of Silk, Chanderi cotton, and Silk cotton. The region is also of importance to followers of Buddhism, due to the presence of the Sanchi Stupa and the Ashoka pillar.</p>
                                                                <p>The natural limestone caves of Kutumsar and the caves of Bhimbetka are also popular. The Bhimbetka caves are a UNESCO World Heritage Site and contain paintings dating back to the prehistoric age, which are considered the earliest evidence of art in South Asia. Madhya Pradesh also houses another UNESCO World Heritage Site, which is the Khajuraho Group of Monuments. Erected by the Chandella Dynasty, they carry sculptures representing the manifestation of Shiva and Shakti, the Yin and the Yang.</p>
                                                            </div>
                                                            <div>
                                                                {/* <div class="accordion accordion-flush pt-3" id="accordionFlushExampleHeritage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Taj Mahal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Recognized as the face of India globally, the Taj Mahal is a beautiful epitomical structure dedicated to one of the wives of the Mughal emperor Shah Jahan. This majestic art of beauty incepts the clinging feelings of every lover to reality. This incredibly redefined white beauty never runs out of tourists, as the Taj Mahal remains a main attraction for international tourists visiting India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Ajanta & Ellora Caves
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The earliest evidence of Buddhism in India, Ajanta and Ellora caves, showcases the beautiful work of the Buddha monks from around 2000 years ago. These caves are meticulously carved in the rock, displaying an amazing understanding of art and architecture that defines the culture and beliefs of ancient India on the walls of these caves.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Khajuraho Temples
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The temple complex of Khajuraho is a testimony to the rich heritage of ancient India. Located in Madhya Pradesh, these 25 temples depict the culture and understanding of that time regarding prominent human life. During this heritage walk, you will witness beautifully carved sculptures throughout the temple walls, roofs, and even on the floors. All of these details in the buildings hold architectural significance and brilliance, making it an adorable heritage site.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Konark Sun Temple
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">At Konark Sun Temple, the language of stone surpasses the language of man. The temple is dedicated to the deity Sun and is one of the most amazing works of architectural depictions from the Kalinga Dynasty. The temple is designed in the shape of a chariot and features six horses carved on one side of the temple. It is considered one of the largest Brahmin sanctuaries and is a UNESCO world heritage site. A heritage walk to the Konark Sun Temple will amaze you and leave you in awe.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Hampi Ruins
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Situated in the Vijayanagar district of Karnataka, this site is a UNESCO world heritage site. Once a part of a prosperous kingdom, it now lies in ruins; nevertheless, it remains an amazing site to witness. You can see a collection of Dravidian-style architecture temples and other structures, all displaying intricate architectural detailing and carvings that make us wonder about the artistic significance of the old days.</div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/central-india.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="fairs-festivals" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#fair-festival-north" role="tab" aria-controls="fair-festival-north" aria-selected="true">
                                                        <span>01</span><br />North India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#fair-festival-south" role="tab" aria-controls="fair-festival-south" aria-selected="false">
                                                        <span>02</span><br />South India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#fair-festival-east" role="tab" aria-controls="fair-festival-east" aria-selected="false">
                                                        <span>03</span><br />East India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#fair-festival-west" role="tab" aria-controls="fair-festival-west" aria-selected="false">
                                                        <span>04</span><br />West India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#fair-festival-central" role="tab" aria-controls="fair-festival-central" aria-selected="false">
                                                        <span>05</span><br />Central India
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='fair-festival-north' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The states of North India are hugely varied in their topography, consisting of snow-clad mountains and blazing deserts, fertile valleys, and metropolitan cities. This variation allows for different temperatures and the existence of a variety of flora and fauna. Given such differences, the region is home to a number of cultures with their own languages, traditions, and ways of living life. They have their own rites and rituals, along with distinct ways of celebrating them. There are a number of fairs and festivals that take place in North India each year. Here are some of the must-see festivals in North India.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleNorthFestivals">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Bikaner Camel Festival, Rajasthan
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthFestivals">
                                                                            <div class="accordion-body">An important part of life for the people of the Thar Desert in Rajasthan, camels are held in high regard. They are referred to as the "Ship of the Desert," making commuting through rough terrains easier. Organized by the Department of Tourism, Rajasthan, this two-day festival is held in January every year in Bikaner, Rajasthan, honoring the beauty and resilience of camels. The festival, a must-attend festival in Rajasthan, commences from the Junagarh fort with parading camels adorned with fancy necklaces, anklets, and bridles. A camel pageant is held, consisting of various games and competitions for the camels. Not just for the camels, various games are also held for the visitors, like tug-of-war and kabaddi, among others. The festival concludes with a beautiful display of fireworks lighting up the night sky, until next year.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Hemis Festival, Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthFestivals">
                                                                            <div class="accordion-body">The Hemis Festivalis a must-visit festival in the Leh district of Ladakh during your Leh Ladakh tour. Held on the tenth day of the fifth month according to the Lunar Tibetan calendar, it honors Guru Padmasambhava, revered for popularizing Tantric Buddhism in the Himalayan region. The two-day festival, celebrated since 1730, features the vibrant Chaam dance or Mask Dance, symbolizing the triumph of good over evil. Accompanied by the mesmerizing sounds of drums, cymbals, and bells, the festival holds great significance for the Buddhist and Tibetan communities of the area.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Kumbh Mela in Haridwar & Prayagraj
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthFestivals">
                                                                            <div class="accordion-body">The Kumbh Mela is a prominent religious festival for the devotees of Hinduism. It happens every three years, rotating between four pilgrim cities situated on four sacred rivers: Haridwar on the River Ganga, Ujjain on the River Shipra, Nashik on the River Godavari, and Prayagraj on the Triveni Sangam, which is the confluence of Rivers Ganga, Yamuna, and Saraswati. The attendees, which include ascetic saints, sadhus, and visitors, take a dip in these holy rivers, which is believed to wash away their sins. These sites are prominent due to the legend revolving around Lord Vishnu, in which he was said to be carrying a pot of holy nectar, and four drops were spilled during a scuffle. The places where the drops spilled are these pilgrim sites and are therefore considered sacred places to attain salvation.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Jaipur Literature Festival, Rajasthan
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNorthFestivals">
                                                                            <div class="accordion-body">If you are a bibliophile or a literature fanatic, the Jaipur Literature Festival is something that you must experience at least once. Started in the year 2006, the festival is a five-day affair that takes place in the beginning of the year and features talks, discussions, and interactions between authors and readers. The gathering had only around 18 speakers and about a hundred attendees when it first began, but now the Jaipur Literature Festival is considered to be one of the most important literature festivals globally, attracting people to fly to the pink city just to be a part of it. The festival includes a number of Indian as well as foreign authors. It also features musical artists and dance performances, creating a soothing ambiance and paying homage to the classical arts of India.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/hemis-festival.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='fair-festival-south' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The south of India is as vibrant as the north when it comes to its traditions and values. Known for its beaches and backwaters, the states in this region are also known for their blend of cultures. Even after centuries, the remnants of the past still remain. A celebration of history, religion, and culture is what makes the festivals of South India memorable. Let's take a look at some of the most popular fairs & festivals celebrated in Southern India.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleSouthFestival">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Nehru Trophy Boat Race, Kerala
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthFestival">
                                                                            <div class="accordion-body">Named after the former Prime Minister of the country, Pandit Jawaharlal Nehru, the Nehru Trophy Boat Race is an annual event held in the Punnamada Lake of Kuttanad, Kerala. It is a must-see festival in Kerala, held on the second Saturday in the month of August. Long snake boats rushing on the waters are the main attraction of the event. The race transforms the otherwise tranquil lake into a lively place with the fervor of the oarsmen and the cheering crowd. It was in 1952 when the former Prime Minister visited the state. He was so mesmerized by the long snake boats that he leaped onto one, disregarding his security. Later, he gifted a silver trophy shaped like one of the boats as a token of his appreciation, hence the name.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Hampi Festival, Karnataka
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthFestival">
                                                                            <div class="accordion-body">Organized by the government of Karnataka, the Hampi Festival or the Hampi Utsav is held annually for three days. It is a must-attend festival on South India Festival & Cultural Tour, celebrated on the ruins of the city of Hampi, now a UNESCO World Heritage Site. Since 1336, the start of the Vijayanagara Empire, the festival has been cherished with fervor and enthusiasm to recreate the charm of the once-mighty empire. It focuses on the prominent monuments of the city, which are lit up during this time. Various song and dance performances called the Janapada Kalavahini also take place. Another highlight is the Jumbo Savari, a procession of beautifully decorated elephants resembling the mighty military of the Vijayanagara Empire. Along with these, various competitions such as photography and rangoli making are also organized. Visitors can indulge in delicacies from the food court and enjoy puppet shows and other street performances.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Pongal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSouthFestival">
                                                                            <div class="accordion-body">The harvest festival of Pongal is an important festival in the South Indian states of Tamil Nadu, Andhra Pradesh, and Telangana. It is a must-attend event on the South India Festival tour. The festival is celebrated to give thanks to Lord Suryanarayan, the Hindu God of Sun and Mother Nature. It marks the beginning of the Tamil month of Thai and is a four-day-long celebration. The four days of Pongal include Bhogi Pongal, Surya Pongal, Mattu Pongal, and Kaanum Pongal. The second day, Surya Pongal, is considered to be the main day of Pongal celebrations, dedicated to the Sun God. Women wake up early to create beautiful Kolams in front of their doorsteps using rice flour and prepare the sweet dish made out of rice, milk, and jaggery, also called Pongal, as an offering to the Sun God. Another important event of Pongal is Mattu Pongal, a day dedicated to cattle such as cows, bulls, and oxen. They are washed, their horns painted and decorated, and offered Pongal. Traditional bullfights known as Jallikattu are also a special feature of this day.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/boat-race.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='fair-festival-east' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Eastern India is a prominent region for the devotees of religions such as Buddhism, Jainism, and Hinduism. From Nalanda Mahavira in Bihar to the Jagannath Temple in Odisha, East India is truly a marvel to behold. It celebrates its festivals with crazy enthusiasm and passion, making it a delightful event for the attendees. The region has historic and religious significance, with its dark, interesting caves, and tranquil beaches. The northeastern part of India truly feels magical with its mist-covered mountains, lush green valleys, and raging waterfalls. Abundant with wildlife and diverse flora and fauna, this region of India is an example of sustainable living. The states here are composed of numerous tribes who proudly flaunt their culture. These tribes are what make the northeast so special, with festivities as unique and special as their own cultural practices.</p>
                                                                <p>The celebrations of these states are well-known among the people. Here are some of the popular festivals celebrated in the east and northeastern regions of India:</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleEastFestival">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Durga Puja Festival
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastFestival">
                                                                            <div class="accordion-body">The festival of Durga Puja is celebrated on a large scale in the city of Kolkata, West Bengal, every year during the period of Navratri. It is a ten-day-long festival that illuminates the whole city. The idols of Goddess Durga are brought home or placed in public Pandals, which are open for visitors to seek blessings. Goddess Durga is highly revered in the state as the Mother Goddess, created by the energies of various Gods to defeat the demon Mahishasura. The festival of Navratri is celebrated in commemoration of the fight between the Goddess and the demon. The Pandals housing the idol of the Goddess are decorated based on certain themes, ranging from mythological epics to social issues. These Pandals are also known for serving delicious food to the visitors, a true testament to the city's love for their culinary delights. The ten-day festival culminates with the ritual called Visarjan, where the idol of the Goddess is immersed in the river bodies.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Poush Mela
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastFestival">
                                                                            <div class="accordion-body">The Poush Mela takes place every year on the 7th day of the Bengali month of Poush. It is held in the town of Shantiniketan in the Birbhum district of West Bengal. This rural carnival celebrates the state and its culture. The fair is inaugurated with folk songs and music to kickstart the event. Various artists from Bengal perform folk and tribal dances such as Baul, Santhali, and Mundari. The fair also features numerous stalls selling fabrics and handicrafts made from jute, conch shells, etc. Moreover, it offers amazing Bengali food, including Alur Dom and Sondesh.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Hornbill Festival
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastFestival">
                                                                            <div class="accordion-body">Organized by the Government of Nagaland, the Hornbill Festival is an annual event. It is named after the Hornbill bird, which is featured in the tribal folklore of the state. The festival takes place at the Kisama Village in Nagaland. The major tribes of the state participate in this event and showcase their own songs, dances, and other performances. The festival beautifully depicts the tribal culture preserved by these tribes despite modernization. Besides the captivating performances, visitors can also indulge in various traditional Naga cuisines available during the festival.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Assam tea Festival
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleEastFestival">
                                                                            <div class="accordion-body">Home to one of the major tea-producing regions of the world, Assam loves its tea. The tea festival is celebrated in Jorhat, Assam, and is promoted by the state's tourism department. During the festival, visitors can explore the nearby tea gardens and estates to learn about tea farming and even purchase some quality tea to take back home. There are various types of tea offered, including white, green, oolong, and the famous black tea of the state. Apart from these, visitors can also indulge in activities like golfing, rafting, and trying out local Assamese food. Additionally, guests are encouraged to visit the Guwahati Tea Auction Centre. So, enjoy your visit to this beautiful state in the northeast while sipping on your cup of garam chai.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/durga-pooja.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='fair-festival-west' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>The western region of India houses temples and churches of religious and historic importance. With the remnants of the past, West India has a number of UNESCO World Heritage Sites, such as the Ajanta and Ellora caves of Maharashtra, the Dholavira caves and Rani ki Vav of Gujarat, and the St. Augustine Tower and the Basilica of Bom Jesus in Goa. Festival tourism in West India is also thriving, with the region hosting popular events, fairs, and festivals. Apart from these monuments and their history, these states also host some amazing festivals as well. The vibrant and diverse culture of West India comes alive during these festive celebrations, offering a unique opportunity for travelers to immerse themselves in the rich traditions and customs of the region. From colorful and lively processions to mesmerizing folk dances and music performances, these festivals showcase the true spirit of West India. Visitors can experience the joy and fervor of festivals like the Ganesh Chaturthi in Maharashtra, Navratri in Gujarat, and Carnival in Goa. Each festival is steeped in local beliefs and customs, making it a fascinating cultural experience. Tourists from all over the world flock to West India during these festive occasions to witness the splendor and excitement that these events bring. In addition to the religious and historical attractions, festival tourism in West India has become a major draw for travelers seeking a unique and unforgettable experience. The fusion of heritage, architecture, and vibrant festivities makes West India a must-visit destination for those looking to explore the diverse cultural tapestry of this incredible region.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleWestFestival">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Ganesh Chathurti
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestFestival">
                                                                            <div class="accordion-body">The festival of Ganesh Chathurthi is a prominent celebration in the state of Maharashtra. It takes place during the Hindu month of Bhadrapada every year. The ten-day festival honors the homecoming of the Hindu God Ganesha, who is revered as an epitome of wisdom and prosperity and is often referred to as Vighnaharta, the one who clears obstacles. The festivities commence with bringing the idol of the God to homes or Pandals for public viewing and worship, which are organized in most areas. Throughout the duration of the festival, the idol is worshipped and offered food offerings or prasad. On the tenth day, the idol is carried with songs and praise and then immersed in a water body, such as the sea, river, or a well, in a ritual called the Visarjan. Pandal hopping is a common activity during this time due to the numerous Pandals set up across the state. Additionally, a special sweet known as Modak holds significance during the festival and is a popular delicacy enjoyed by many. The Ganesh Chathurthi festival brings communities together, fostering a sense of joy, devotion, and cultural unity as people come together to celebrate and seek blessings from Lord Ganesha. It is a cherished time for people in Maharashtra and is marked by colorful decorations, lively processions, and heartfelt celebrations.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Rann Utsav
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestFestival">
                                                                            <div class="accordion-body">The Rann Utsav is a cultural festival held every year in Kutch, Gujarat, to celebrate the natural beauty of the white desert of Rann. The Rann of Kutch is a vast salt marshy land located in the Thar desert in the western state of Gujarat. The festival showcases the cultural and folk beauty of the people of Kutch through a display of art forms, including dance and song performances, traditional handicrafts, and more, all while hosting visitors with their warm hospitality. Especially enchanting are the cultural performances held against the backdrop of the white desert under the moonlight. Paramotoring, horse and camel rides, meditation, and yoga are among some of the activities visitors can indulge in during the festival. The Rann Utsav offers a unique opportunity for travelers to experience the vibrant culture, traditional art, and rich heritage of the region. It attracts people from all over the world, providing a memorable and immersive experience in the mesmerizing landscape of the Rann of Kutch.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Sunburn Festival Goa
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWestFestival">
                                                                            <div class="accordion-body">If you are someone who loves dancing to loud music while enjoying the view of the setting sun at a fascinating beach, then the Sunburn festival is for you. The Sunburn Festival is a three-day event held at Vagator Beach in Goa every year. It is considered to be one of the largest music festivals in Asia. This EDM (Electronic Dance Festival) fest attracts a crowd of thousands each year and features numerous Indian as well as international music artists. Sunburn creates an extravagant ambiance with its enthusiastic crowd, amazing music, and unforgettable performances, which will leave you with a plethora of memorable experiences.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/ganesh.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='fair-festival-central' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>This part of India not only contains historic monuments and temples but is also abundant with wildlife. Central India is culturally blessed to house the most number of tribes in the country. The state governments encourage the traditions and beliefs of the tribals and work hard to preserve their culture in this fast-moving economy. The diversity and fervor of these tribes can be observed in the way they celebrate their festivities. Some of the most popular festivals of the central region of India are:</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleCentralFestival">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Lokrang Festival
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleCentralFestival">
                                                                            <div class="accordion-body">Home to the largest amount of tribal population in the country, Madhya Pradesh is also known for its Lokrang Festival. The festival is celebrated to honor the various tribes and their folk culture that make the state what it is. The five-day festival, held annually, is an important event in the state. It features classical and folk dances of the tribes, art and craft exhibitions, theatrical performances, and even book exhibitions showcasing books related to culture and literature. The aim of the festival is to preserve the various folk and tribal traditions of India and prevent them from going extinct</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Khajuraho Dance Festival
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleCentralFestival">
                                                                            <div class="accordion-body">Held at the site of the Khajuraho group of monuments, the festival takes place annually in the state of Madhya Pradesh. This seven-day event, organized by the state's department of culture, encourages the classical arts of India by providing them with a stage amidst the glorious Khajuraho. It aims to keep alive the age-old heritage of Indian classical dance forms like Kathak, Bharatnatyam, Kuchipudi, etc. The mesmerizing performances are held on an open-air stage in front of the Chitragupta and Vishwanatha Temples of Khajuraho.

                                                                                The Khajuraho Dance Festival is a captivating celebration of the rich cultural heritage of Madhya Pradesh and a testament to the artistic brilliance of Indian classical dance forms. This cultural extravaganza is a highlight of Madhya Pradesh Tourism and a must-attend event for anyone looking to experience the diverse and enchanting facets of Incredible India. Visitors from around the world gather at Khajuraho to witness the spellbinding performances and immerse themselves in the timeless beauty of these ancient dance forms in the historic backdrop of Khajuraho's magnificent temples.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/khajuraho-dance.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="museum-in-india" role="tabpanel">
                                        <div className='exploring explore-india'>
                                            <ul className='nav flex-column nav-pills explore-left' role='tablist' aria-orientation='vertical'>
                                                <li>
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#museum-north" role="tab" aria-controls="museum-north" aria-selected="true">
                                                        <span>01</span><br />North India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#museum-south" role="tab" aria-controls="museum-south" aria-selected="false">
                                                        <span>02</span><br />South India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#museum-east" role="tab" aria-controls="museum-east" aria-selected="false">
                                                        <span>03</span><br />East India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#museum-west" role="tab" aria-controls="museum-west" aria-selected="false">
                                                        <span>04</span><br />West India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="nav-link" data-bs-toggle="tab" href="#museum-central" role="tab" aria-controls="museum-central" aria-selected="false">
                                                        <span>05</span><br />Central India
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className='tab-content'>
                                                <div className='tab-pane fade active show' id='museum-north' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>North India, a region steeped in history and culture, houses numerous exceptional museums that offer deep insights into its diverse heritage. These museums in North India serve as a treasure trove for art enthusiasts, history buffs, and curious explorers, featuring collections from various periods and genres. From the iconic National Museum in Delhi, the Government Museum and Art Gallery in Chandigarh, to the Allahabad Museum in Uttar Pradesh, each repository tells its own unique story. These popular museums to see provide an engaging and enlightening experience, showcasing the rich tapestry of Indian history, art, culture, and civilization.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleTrekking">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                The National Museum, Delhi
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">India is known for its diverse culture and history, but it's rare to find it all encapsulated in one place. However, you can do just that at The National Museum, Delhi. Situated in the heart of the city, this museum is undeniably a destination for anyone wanting to explore the history and culture of ancient India. The museum is divided into different sections, each displaying specific types of artifacts from various eras. These artifacts are thoughtfully arranged in chronological order to illustrate the transition from early Indian civilizations such as the Harappan and Mauryan periods, through to modern India.<br/>
                                                                            <strong>Visiting Hours - </strong>10:00 AM to 6:00 PM. Closed on Mondays and National Holidays.<br/>
                                                                            <strong>Ticket Prices -</strong>20 Rs for Adults. 650 Rs for Foreign Nationals, which includes an audio guide.<br/>
                                                                            <i>*Please note that ticket prices are subject to change.</i></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Trekking in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ideal for backpackers and flashpackers, Himachal Pradesh is no less than a heaven for trekking. The state has already gained high popularity among the youth and Gen Z for trekking and other adventures, as the hill stations are easily accessible and well-equipped with all facilities. Adorable mountains, adventurous terrains, and economic options are the qualities that will make Himachal Pradesh your next adventure getaway.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Trekking in Kashmir
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Kashmir is an unbelievably beautiful wonderland in India, offering some of the most breathtaking scenic treks that people from around the world come to enjoy. It tops the list of many adventure travelers and trekking enthusiasts for its unparalleled and distinctive treks. Gulmarg, Sonmarg, Pahalgam, and Yusmarg are the main bases that provide treks showcasing the Kashmir valley from within and from deep within its heart.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Trekking in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Ladakh challenges trekkers in its own unique way but rewards them with the opportunity to witness the enormous beauty of its gigantic mountains, an experience not everyone can be a part of. Although the terrain is rough, dry, demanding, and gritty, trekking enthusiasts conquer it time and again. Unlike treks in other Himalayan states, treks in Ladakh are mostly at high altitudes. While there are several short treks, there are more long and intense ones. However, the best part of all is exploring this remote location while disconnecting yourself from the rest of the world.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Trekking in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleTrekking">
                                                                            <div class="accordion-body">Nestled in the might of the enormous Kanchenjunga, Sikkim boasts some truly majestic trekking routes, offering unparalleled beauty amidst nature. The trails are enveloped by lush green wildlife, occasionally granting lucky trekkers sightings of beautiful creatures like musk deer and the exotic red panda. With nearly fifteen treks to choose from in Sikkim, each one promising a unique adventure, including the mighty Kanchenjunga, never fail to enthrall and captivate trekkers, making it an unforgettable experience.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/trekking-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='museum-south' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Wildlife adventure exploration is one of the top activities to embark on during an Incredible India tour. Just the thought of venturing into the wild is enough to send shivers of excitement down your spine. India is blessed with a treasure trove of wildlife, scattered throughout the nooks and corners of the country. Exploring the wondrous beauty of the wild not only captivates photographers and wildlife enthusiasts but has also become a new favorite for honeymoon couples and family travelers. In the wildlife safaris, you will have the opportunity to encounter some of the most magnificent and endangered species thriving in India, such as the Indian one-horned rhinoceros, Barasingha, and Royal Bengal Tiger. Nature and wildlife lovers, as well as photographers from across the globe, find themselves drawn to India's exotic yet thrilling national parks and wildlife sanctuaries, where they can have their next extraordinary encounter with nature and the wild.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleWildlife">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Ranthambore National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">The Rajasthani royal dignity, Ranthambore National Park, is an excellent wildlife destination for safaris, wildlife experiences, and, of course, spotting the Bengal Tigers. The park boasts a good density of these big cats, but spotting one wandering around is still a matter of luck. Ranthambore is also home to many other species of flora and fauna</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Kanha National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Kanha National Park, in case you didn't know, was the jungle that inspired the famous novel "The Jungle Book" by Rudyard Kipling. This renowned national park in Madhya Pradesh is well-known for its diverse wildlife, featuring many special attractions such as Barasingha, Panther, Blackbuck, Chital, Sambar, and Barking deer, yet your eyes won't stop seeking Bengal Tigers. Fortunately, there is a fair chance of spotting tigers here, as the park has a high density of almost 7 tigers per 100 sq. km.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Corbett National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">"You are lucky if you spot tigers, but unlucky if not in Jim Corbett National Park." On the bucket list of many, Jim Corbett National Park is one of the oldest and well-known national parks in India. A perfect paradise for wildlife and nature lovers, the park is blessed by mother nature and offers great chances for tiger sightings. Along with the highest number of tigers, the park also boasts beautiful landscapes and is home to many other remarkable species, such as sloth bears, Asiatic black bears, jungle cats, elephants, wild boars, chitals (spotted deer), barking deer, and nilgai (Indian antelope).</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Bandhavgarh National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">Bandhavgarh National Park, with a gigantic area spanning 1500 sq. kilometers, is perpetually a remarkable forest in the heart of India, Madhya Pradesh. This vast forest is filled with small and large animals, each with its own captivating tales. The majestic sounds of nature and the wild speaking of its existence will amaze you while being in Bandhavgarh National Park. You will find plenty of wild animals in the vicinity, including Leopards, Sambar, Barking Deer, Wild Boar, Gaur, Chausingha, and Chinkara, as well as the Asiatic jackal, Bengal fox, striped hyena, jungle cat, leopard, and the Bengal tiger.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Tadoba National Park
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleWildlife">
                                                                            <div class="accordion-body">A feeling of thrill upon entering the gates, a sense of connection while driving through the forest and encountering wild creatures, and the captivating experience of spotting tigers are what make your trip to Tadoba National Park truly memorable. Located in central India, Tadoba National Park boasts thriving wildlife, offering abundant sightings of animals such as leopards, Jungle Cats, Sloth bears, Sambars, Spotted deer, and around 190 species of birds.

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/wildlife-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='museum-east' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>An exhilarating adventure for thrill-seekers and a daring challenge for their friends, river rafting is one of the top things to do in India's adventure tourism. It's an amazing way to connect with nature and experience its glorious ways. India, featured on the top of world adventure tourism map, is home to a plethora of rivers flowing down great mountain alleys, carving heart-pounding courses of ups and downs, rapids, and falls in their streams. Once aboard a raft, no one looks back or loosens their grip on the paddles, as the rafting adventure takes them through an adrenaline-pumping ride. White water rafting in India has gained popularity among tourists as a safe adventure sport, suitable for both newbies and expert rafters. While Rishikesh remains the most popular destination for rafting enthusiasts, there are countless other spots spread across the expansive Himalayan states, each offering its own unique and thrilling experience. So, for those seeking an adrenaline rush and a chance to embrace the raw power of nature, river rafting in India promises an unforgettable and exhilarating journey, making it a must-try adventure in the country's diverse tourism offerings.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleRafting">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                River Rafting Uttarakhand
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">The city of sages, spirituality, and serenity, Rishikesh, known as "The Yoga capital of the world," is one of the most popular destinations for adventure lovers in Uttarakhand. River rafting along the rapid flow of the Ganga River makes it a thrilling and unforgettable experience. Other places to experience river rafting in Uttarakhand include Devprayag, Rudraprayag, Mori, Chakrata, and Chamoli. Each of these locations offers different levels of rapids, with Rishikesh having the most extreme level of rapids up to level V. On the other hand, the other locations mostly have rapids ranging from level I to III, making them highly enjoyable for beginners and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                River Rafting in Himachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Himachal is among the most suitable locations for river rafting after Uttarakhand. With many rivers originating from Himachal Pradesh, the state offers some popular rafting circuits that attract adventure tourists. The most sought-after rafting courses are found on the four rivers, including the mighty Beas River, Chenab, Ravi, and Satluj, located in Kullu & Manali, Lahaul, Chamba, and Shimla. Most of the rapids here are between levels I and III in difficulty, making them ideal for inexperienced rafters and families.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                River rafting in Sikkim
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Sikkim offers rafting courses on two rivers, the Teesta and Rangit. While the river Rangit has some extreme rapids and drops in the course, it is highly pursued by highly enthusiastic adventurers who are experts in white water rafting. On the other hand, the River Teesta has rapids ranging from easy to intense, making it compatible with families and those with intermediate rafting experience. Moreover, the rafting circuits pass through scenic surroundings and lush green forests, making it a perfect spot for adventure enthusiasts who love nature.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                River Rafting in Arunachal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Arunachal, along with being an excellent place for nature and sightseeing lovers, is also a great destination for adventure buffs due to its stunning rafting courses. One of the most thrilling experiences is river rafting in the mighty Brahmaputra River and its tributaries. Rafting in Arunachal Pradesh takes you through some isolated areas and offers wonderful views amidst forests, presenting a number of challenges such as drops, rapids, and riffles.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                River Rafting in Ladakh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleRafting">
                                                                            <div class="accordion-body">Ladakh, a landscape paradise nestled in the mountains of India, offers great river rafting experiences in the Indus and Zanskar rivers. Famous among adventure enthusiasts, Ladakh has intermediate to intense levels of rafting courses to cater to different experience levels. While enjoying the thrill of rafting, make sure not to get too distracted by the enormously beautiful scenes of the mountains surrounding you. Stay focused and enjoy the exhilarating ride!</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/rafting-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='museum-west' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Another top activity for Incredible India explorers is nature sightseeing. Escaping the course of regular life and immersing oneself in the enormous beauty of nature and its breathtaking sights is something no one would say no to. Nature sightseeing in the Indian hill stations has captured the hearts of tourists from around the globe. The majestic Great Himalayas never fail to catch the eye of every passer-by. From Uttarakhand and Himachal Pradesh to Kashmir, Sikkim, Arunachal Pradesh, and other regions across North to South, East to West, there are some of the most preferable locations to experience the pleasing topography of nature. It's not just the mountains, but also the incredible natural diversity that makes the environment irresistible, enticing people to come back again and again.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleNature">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Uttarakhand Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">In the meadow of the Great Himalayas, lies the enormous beauty of Uttarakhand, showcased by its captivating hill stations. Uttarakhand is loved by adventure and nature tourism enthusiasts for the thrilling experiences it offers amidst the tranquil environment - quite quirky, isn't it? The state is spread from the foothills of the Himalayas to the high summits of the mountains, offering a diverse range of landscapes. From Rishikesh, the low-lying adventure hub, to the stunning topography of Auli, Uttarakhand is home to many adorable hill stations that cater to various preferences and interests. Whether you seek thrilling adventures or seek solace in the lap of nature, Uttarakhand's hill stations have something special to offer.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Himachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Himachal Pradesh has been playing the role of a summer healer for the people of the North Indian plains for a long time, spreading its charisma and calming their minds from their daily hustle. The state is home to plenty of beautiful hill stations, aboding quaint and scenic towns with pleasant landscapes. Peaking to the Himalayan peaks all the time, Himachal Pradesh, along with being the "easiest to access" of all Himalayan states, has more than many reasons to be next on your list of destinations to visit.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Kashmir Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">Nothing needs to be proven when it comes to Kashmir. It is one of the most praised locations for mountain lovers, often referred to as the "Switzerland of India," gathering travel buffs from around the globe. The beauty that is often seen in pictures can be witnessed firsthand in the adorable hill stations of Kashmir. Sonmarg, Gulmarg, Pahalgam, Srinagar, Yusmarg, and many more hill stations will leave you in awe with their stunning vistas and natural charm.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Sikkhim Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">To the peaks of the Himalayas and the forests of the Western Ghats, Sikkim boasts an enormous collection of beautiful experiences within its picturesque boundaries. Sikkim's hill stations are captivating, offering a blend of stunning mountain ranges, murmuring water streams, lakes reflecting the sunshine, and cascading forests. Sikkim looks at its best throughout the year, and some of the popular hill stations here include Pelling, Gangtok, Aritar, Lachen, Namchi, Mangan, and more.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Arunachal Hill Stations
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNature">
                                                                            <div class="accordion-body">The untouched beauty of Arunachal Pradesh is a landscape that showcases great wildlife amid the enormous beauty of the mountains. It is the perfect place to experience mother nature at its best, as Arunachal Pradesh Hill Stations lie on the eastern edge of the country. The once-anticipated and challenging terrain now boasts accessibility to every nook and corner of the state. Hill stations in Arunachal Pradesh, providing the essence of the "Land of the Dawn," include Tawang, Bomdila, Itanagar, and Pasighat.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/nature.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='museum-central' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>India comes as one of the most promising countries when it comes to heritage tours. Heritage tourism is an important element of Incredible India's top things to explore in its tourism campaign to attract both international and domestic travelers. From the majestic Taj Mahal to the intricate carvings of ancient temples, India's cultural and historical tourism sights serve as a feast for heritage and history buffs. The epics of great dynasties and rulers are evident through their architectural monuments, making everyone wonder and transporting them to the bygone era. India's long history carries the stories of each era, scattered throughout the country, memorizing the presence of old happenings on the land.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleHeritage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Taj Mahal
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Recognized as the face of India globally, the Taj Mahal is a beautiful epitomical structure dedicated to one of the wives of the Mughal emperor Shah Jahan. This majestic art of beauty incepts the clinging feelings of every lover to reality. This incredibly redefined white beauty never runs out of tourists, as the Taj Mahal remains a main attraction for international tourists visiting India.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Ajanta & Ellora Caves
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The earliest evidence of Buddhism in India, Ajanta and Ellora caves, showcases the beautiful work of the Buddha monks from around 2000 years ago. These caves are meticulously carved in the rock, displaying an amazing understanding of art and architecture that defines the culture and beliefs of ancient India on the walls of these caves.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Khajuraho Temples
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">The temple complex of Khajuraho is a testimony to the rich heritage of ancient India. Located in Madhya Pradesh, these 25 temples depict the culture and understanding of that time regarding prominent human life. During this heritage walk, you will witness beautifully carved sculptures throughout the temple walls, roofs, and even on the floors. All of these details in the buildings hold architectural significance and brilliance, making it an adorable heritage site.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Konark Sun Temple
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">At Konark Sun Temple, the language of stone surpasses the language of man. The temple is dedicated to the deity Sun and is one of the most amazing works of architectural depictions from the Kalinga Dynasty. The temple is designed in the shape of a chariot and features six horses carved on one side of the temple. It is considered one of the largest Brahmin sanctuaries and is a UNESCO world heritage site. A heritage walk to the Konark Sun Temple will amaze you and leave you in awe.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Hampi Ruins
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleHeritage">
                                                                            <div class="accordion-body">Situated in the Vijayanagar district of Karnataka, this site is a UNESCO world heritage site. Once a part of a prosperous kingdom, it now lies in ruins; nevertheless, it remains an amazing site to witness. You can see a collection of Dravidian-style architecture temples and other structures, all displaying intricate architectural detailing and carvings that make us wonder about the artistic significance of the old days.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/heritage-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-pilgrimage' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>Renowned for its deep-rooted spirituality and diverse religious significance, India is a prime destination for spiritual souls. A plethora of sacred sites and revered temples scattered throughout the country offer profound and transformative experiences to the pilgrims. From the holy city of Varanasi, where the Ganga River is worshipped, to the yoga center of the world, Rishikesh, where people come in search of serenity and immerse themselves in devotion, India offers spiritual sanctuaries for believers of all religions. India has visiting the sacred city of Haridwar, the iconic temples of Ujjain and Puri, the Golden many religious sites to explore for Muslims, Christians, Buddhists, Jains, and Sikhs. Whether Temple of Amritsar, or the monasteries and Buddhist temples at Sarnath and Bodhgaya, India will be your place in your soul-stirring journey of devotion and spirituality.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExamplePilgrimage">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Varanasi
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The spiritual capital of India, Varanasi, is one of the fondest places to visit for spiritual and pilgrimage tourism. No place could compare to the inclusive beauty and serenity of this city. One of the oldest cities in India, Varanasi is also known by other popular names like Banaras and Kashi. The sounds of chanting, temples, people, and worship everywhere are what make the scene perfect in Banaras. Also, don't miss the evening Ganga Aarti on the Ganga Ghats.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Haridwar
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The gateway to pilgrimages in India, Haridwar is one of the most visited pilgrimage sites in the country. Located on the foothills of the Himalayas, this sacred city is picture-perfect for spiritual journeys. The swiftly flowing Ganga, people making holy dips on the banks, and the markets full of religious artifacts create a natural and beautiful atmosphere in Haridwar. There are many temples to visit, but nothing should be prioritized over witnessing the mesmerizing Ganga Aarti.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Rishikesh
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">The yoga capital of the world, Rishikesh, is no wonder one of the top pilgrimage destinations in India. Rishikesh used to be the place for meditation and daily yoga sessions of sages of India. The adorable Lakshman and Ram Jhula (Suspension bridges), Beatles Ashram, and Shivpuri are must-visit places here.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Ujjain
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">Situated on the banks of the holy Shipra river, Ujjain has plenty of pilgrimage sites to make up your tour. Also, being the home of one of the twelve Jyotirlingas, Mahakaleshwar, Ujjain welcomes many spiritual seekers to it. The serene and hospitable environment makes it a preferable place for some offbeat experiences in Madhya Pradesh. Similar to Varanasi, Ujjain too lets you dive into spirituality amidst the crowd of people.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Puri Odisha
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplePilgrimage">
                                                                            <div class="accordion-body">One of the four holy shrines (Char Dham) of Hindus, the Shree Jagannath Temple is the main attraction of Puri. It attracts a lot of pilgrims due to its significance in the Hindu religion. Puri is also home to many other significant temples, making it a must-visit destination for a pilgrimage tour. You can explore the local culture and tradition by visiting markets and talking to the locals.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/pilgrimage-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='pills-adventure-sports' role='tabpanel'>
                                                    <div className='explore-right'>
                                                        <div className='mid'>
                                                            <div className='content'>
                                                                <p>When it comes to adventure tourism, India offers a plethora of adventure activities, catering to both new and expert adventurers. India stands at the forefront of adventure tourism on the global tourism map. From the towering peaks of the Himalayas to the pristine beaches of Goa, the country provides endless opportunities for adrenaline enthusiasts. Whether it's trekking the low and high hills, exploring the mighty Himalayan peaks, experiencing breathtaking views of valleys, rafting through the streams of the Ganga, snorkeling in the Andaman Sea, or engaging in thrilling cycling tours, each activity offers captivating experiences. These activities have become increasingly popular among people in India. Whether you are a beginner in the adventure world or seeking more thrilling experiences, India has a wide array of options waiting for you to explore.</p>
                                                            </div>
                                                            <div>
                                                                <div class="accordion accordion-flush pt-3" id="accordionFlushExampleAdventure">
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                                Paragliding
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Why always keep looking up at the mountains when you can gaze down from the high skies while paragliding? One of the most adventurous sports out there, paragliding is a must-do activity if you want to experience something exceptional. And the best part is, it's totally safe as you'll be accompanied by an expert who ensures all safety measures are taken. Mussoorie, Manali, Bir Billing, and Sanasar are some of the best-known places to enjoy this thrilling activity.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                                Skiing
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Who glides swiftly over the ice? Definitely, you should enjoy this thrilling adventure sport while in the mountains. The snow-capped landscape and the chilly yet exhilarating winds make skiing an unforgettable experience. The best locations to try this activity are Pahalgam and Gulmarg in Kashmir, Solang, Kufri, and Rohtang Pass in Manali, and Auli in Uttarakhand.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                                Mountaineering
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">Mountaineering is becoming more and more popular and is undoubtedly one of the adrenaline-pumping sports you can enjoy in adventure tourism in India. It offers something out of the box, something worth remembering - a moment that could stay with you for a lifetime. Though the peaks are tough to conquer, enthusiasts won't give up. The best places to start your mountaineering experiences should be Manali and Sikkim as they have some low peaks suitable for beginners. For intermediate and experienced climbers, Ladakh, Nanda Devi, Garhwal, and Himachal (Kullu, Spiti & Kinnaur) are excellent choices.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                                                Cycling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">How long has it been since you last rode a bicycle? Guess what, it won't be long before you start again. Cycling is a new trend in the adventure tourism world that is gaining popularity at a rapid pace. Riding with friends by your side and witnessing beautiful sights along the way is a truly memorable experience. The best part is, you are in charge and can go wherever you want. Not to mention, cycling is not only the safest but also the healthiest adventure activity. So, get ready to step on the pedal and say, "Let's Go!" Some of the tracks that you should consider for cycling through great landscapes are Chennai to Puducherry, Somnath to Diu, Coorg to Munnar, Shillong to Cherrapunji, and Manali to Leh.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-item">
                                                                        <h2 class="accordion-header">
                                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                                Snorkelling
                                                                            </button>
                                                                        </h2>
                                                                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleAdventure">
                                                                            <div class="accordion-body">India is also one of the top destinations for snorkelling adventures. You got to see what is below the water's surface? Well, snorkelling is the thing you need. The amazing underwater world is just below our feet to explore. Snorkelling is swimming on the surface of the seawater at shallow depths, keeping half of the body submerged in the water. This allows us to see marine life right before our eyes. The top places to do snorkelling in India are Andaman, Lakshadweep, Goa, and Pondicherry.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='image'>
                                                            <img src="https://www.tourmyindia.com/imagess/adventure-tab.webp" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;