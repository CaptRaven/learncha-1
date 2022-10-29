import React from 'react';
import { Link } from 'react-router-dom';
import child_1 from '../images/child_1.png';
import child_2 from '../images/child_2.png';
import child_3 from '../images/child_3.png';

const Hero = () => {
  return (
    <div className='border-t-2 md:border-none border-red-400 rounded-t-xl pt-5 px-2 sm:px-3'>
        <section className="promo pb-8">
            <div className="slider-wrap flex flex-col justify-center items-center gap-4">
                <ul className="slider grid gap-4 md:gap-8 lg:gap-10 max-w-6xl">

                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl md:rounded-full overflow-hidden'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full md:rounded-l-full rounded-t-xl' alt='' src={child_3}/>
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><Link href="/games" className='animate animate-pulse text-red-500'>Games for kids</Link></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                    Discover the best educational games for kids various different subjects areas like Math, Science, Art and more. Educational games are a great alternative for choildren who don't learn best through paper and pencil instructions.
                                </p>
                                <a className="btn red" href="#">Learn more</a>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl md:rounded-full overflow-hidden'>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Education for kids</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red" href="#">Learn more</a>
                            </div>
                        </div>
                        <div className='w-full h-full overflow-hidden'>
                        <img className='w-full h-full md:rounded-l-full rounded-t-xl' src={child_2}/>
                        </div>
                    </li>

                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl md:rounded-full overflow-hidden'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full md:rounded-l-full rounded-t-xl' src={child_1}/>
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Climate Challenge</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red" href="#">Learn more</a>
                            </div>
                        </div>
                    </li>

                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl md:rounded-full overflow-hidden'>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Weather Updates</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red" href="#">Learn more</a>
                            </div>
                        </div>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full md:rounded-r-full rounded-b-xl' src="https://images.pexels.com/photos/13988500/pexels-photo-13988500.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
        <div class="dvdr"></div>
        <section id="main">
            <div class="widget-boxes w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
                <div class="box">
                    <a href="#">
                        <div class="box-info experience">
                            <h2>Our experience</h2>
                            <p>Help your child discover their passion for <span className='font-semibold'>STEM</span>
                                (<span className='font-semibold italic'>Science, Technology, Engineering and Mathematics</span>)
                                with our engaging offline and online gamifying platform.
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info about">
                            <h2>About Learncha</h2>
                            <p>Learncha is a educational Gamifying Paltform designed for kids that helps to instill the love of learning in a child.
                                This applies whether they've learning through homeschooling, online learning, offline traditional classroom setting...
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info fun">
                            <h2>Big fun for kids!</h2>
                            <p>Designed by leading learning experts, your child can practice Math, reading, speaking, phonics, Transcribing, Dictionary and more...</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="top-pink-border"></div>
            <div class="event-wrap">
                <div class="block-event">
                    <div class="upcoming-event">
                        <h2>December’s upcoming event</h2>
                        <div class="event-description">
                            <h3><a href="#">Libero tempore cum soluta nobis est eligendi optio cumque nihil</a></h3>
                            <div class="metadata">
                                <time datetime="2014-04-17T09:00">17.04.14 
                                <span>09:00 AM</span></time>
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            <a class="btn yellow" href="#">Learn more</a>
                        </div>
                    </div>
                    <div class="widget-calendar">
                        <table class="event-calendar">
                            <thead>
                            <tr>
                                <th scope="col" class="controls"><span class="prev-mn"><a href="#">-</a></span></th>
                                <th scope="col" colspan="5" class="month">December 2022</th>
                                <th scope="col" class="controls"><span class="next-mn"><a href="#">-</a></span></th>
                            </tr>
                            <tr>
                                <th scope="col" title="Monday">Mon</th>
                                <th scope="col" title="Tuesday">Tue</th>
                                <th scope="col" title="Wednesday">Wed</th>
                                <th scope="col" title="Thursday">Thu</th>
                                <th scope="col" title="Friday">Fri</th>
                                <th scope="col" title="Saturday">Sat</th>
                                <th scope="col" title="Sunday">Sun</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><div class="cell-wrap another-day">31</div></td><td><div class="cell-wrap">1</div></td><td><div class="cell-wrap">2</div></td><td><div class="cell-wrap">3</div></td><td><div class="cell-wrap">4</div></td><td><div class="cell-wrap">5</div></td>
                                <td><div class="cell-wrap archival sun">
                                        <a href="#">6</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-06T09:00">06.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><div class="cell-wrap">7</div></td><td><div class="cell-wrap">8</div></td>
                                <td><div class="cell-wrap archival wed">
                                        <a href="#">9</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-09T09:00">09.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">10</div></td><td><div class="cell-wrap">11</div></td>
                                <td><div class="cell-wrap archival sat">
                                        <a href="#">12</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-12T09:00">12.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">13</div></td>
                            </tr>
                            <tr>
                                <td><div class="cell-wrap">14</div></td><td><div class="cell-wrap">15</div></td><td><div class="cell-wrap">16</div></td>
                                <td><div class="cell-wrap upcoming thu">
                                        <a href="#">17</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-17T09:00">17.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">18</div></td><td><div class="cell-wrap">19</div></td><td><div class="cell-wrap">20</div></td>
                            </tr>
                            <tr>
                                <td><div class="cell-wrap">21</div></td>
                                <td><div class="cell-wrap upcoming tue">
                                        <a href="#">22</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-22T09:00">22.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">23</div></td><td><div class="cell-wrap">24</div></td>
                                <td><div class="cell-wrap upcoming fri">
                                        <a href="#">25</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-25T09:00">25.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">26</div></td><td><div class="cell-wrap">27</div></td>
                            </tr>
                            <tr>
                                <td><div class="cell-wrap upcoming mon">
                                        <a href="#">28</a>
                                        <div class="tooltip">
                                            <div class="event-tooltip">
                                                <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                                                <div class="metadata">
                                                    <time datetime="2014-04-28T09:00">28.04.14 
                                                    <span>09:00 AM</span></time>
                                                    <span class="place">Lorem ipsum dolor</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td><div class="cell-wrap">29</div></td><td><div class="cell-wrap">30</div></td><td><div class="cell-wrap another-day">1</div></td><td><div class="cell-wrap another-day">2</div></td><td><div class="cell-wrap another-day">3</div></td><td><div class="cell-wrap another-day">4</div></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="legend"><span class="upcoming">Upcoming event</span><span class="archival">Archival event</span> </div>
                    </div>
                </div>
            </div>
            <div class="bottom-pink-border"></div>
                <div class="widget-boxes news">
                    <h2>Updates</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4'>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src="images/img-news01.jpg" alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">This is interesting!!!</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-17">17.04.14</time>
                                    <span>Prince Achoja</span>
                                </div>
                                <p>Introducing our STEM Learning center in Kano Nigeria. Designed by learning experts, your 
                                child can now practice math, reading phones and more. Step-by-step learning path designed to
                                help kids learn math, reading, Science and more(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src="images/img-news02.jpg" alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">We have Lego</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-16">16.04.14</time>
                                    <span>Salma Gambo</span>
                                </div>
                                <p>Join our lego Robotics Hub Hub Classes every Saturday. Find the right instructor for you,
                                    choose from many topics, skill levels and languages(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src="images/img-news03.jpg" alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">Duis aute irure dolor in reprehenderit</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-13">13.04.14</time>
                                    <span>Muhammad Abubakar</span>
                                </div>
                                <p>We have partnered with Kano state library board to introduce a platform where you can create
                                a new picture, storybook, translate a story, adapt a story for a different level and build your
                                own story collection(...)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Hero