const footer = document.getElementById('footer')
footer.innerHTML = `
       <footer class="w-full py-14">
        <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto">
                <a data-aos="zoom-in" href="/index.html" class="flex justify-center ">
                    <img src="/docs/assets/images/logo.png" class="md:h-32 h-20" alt="">
                </a>
                <ul data-aos="fade-up"
                    class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 pt-12 ">
                    <li><a href="/index.html"
                            class="text-gray-800 hover:text-[#930503] transition-all duration-500">Home</a></li>
                    <li><a href="/about.html"
                            class="text-gray-800 hover:text-[#930503] transition-all duration-500">About</a></li>
                    <li><a href="/services.html"
                            class=" text-gray-800 hover:text-[#930503] transition-all duration-500">Services</a></li>
                    <li><a href="/blog.html"
                            class=" text-gray-800 hover:text-[#930503] transition-all duration-500">Blog</a></li>
                    <li><a href="/contact.html"
                            class=" text-gray-800 hover:text-[#930503] transition-all duration-500">Contact Us</a></li>
                </ul>
                <div data-aos="fade-up" class="flex items-center justify-center text-zinc-600 text-2xl gap-8 mt-7">
                    <a href="">
                        <i class="fa-brands transition-all duration-500 hover:text-[#930503] fa-instagram"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands transition-all duration-500 hover:text-[#930503] fa-facebook-f"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands transition-all duration-500 hover:text-[#930503] fa-x-twitter"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands transition-all duration-500 hover:text-[#930503] fa-tiktok"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands transition-all duration-500 hover:text-[#930503] fa-youtube"></i>
                    </a>
                    </div>
                    
                <div class="border-t md:flex-row flex-col gap-5 border-gray-200 pt-5 flex items-center justify-center mt-8">
                    <span class="text-lg text-gray-500 text-center block">Copyright © <span id="copyright"></span> Kat's Daily Realty</span>
                </div>
            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year