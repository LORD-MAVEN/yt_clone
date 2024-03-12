import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <Transition
            as="div"
            show={isMenuOpen}
            enter="transition ease-out duration-300"
            enterFrom="opacity-100 transform -translate-x-full"
            enterTo="opacity-100 transform translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 transform translate-x-0"
            leaveTo="opacity-100 transform -translate-x-full"
            className="bg-white p-3 shadow-right shadow-xl shadow-color-gray-400 h-screen fixed pt-20"
        >
            <div className="mb">
                <div className="mb">
                <ul>
                    <Link to={"/"}>
                    <li className="cursor-pointer hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/loLz64gw1NbxWol6Yfa8WKSmr2_hR51RfbdgQ-9fAT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xOTQ2LzE5NDY0/MzYucG5n"/>Home</li>
                    </Link>
                    <li className="cursor-pointer hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/mENIkL4Xq-32AflzFguYWUG1B1CKCJ0HZvG0whzrVh4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1kveW91dHVi/ZS1zaG9ydHMtbG9n/by1FMkI1MDdFRjE4/LXNlZWtsb2dvLmNv/bS5wbmc"/>Shorts</li>
                    <li className="cursor-pointer hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/RYU80O69b2N5qStPbN3gfKSplB6grCZjpVYe8elfKMc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXdhdGNoLWxhdGVy/LTE3ODE2MDMtMTUx/Mzg1My5wbmc_Zj13/ZWJwJnc9MjU2"/>Watch Later</li>
                </ul>
            </div>
            <div className="cursor-pointer border-t-[1px] border-gray-300 w-40"></div>
            <div className="mb-2">
                <ul>
                    <li className="font-bold text-lg p-2">Subscriptions</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-3 py-1 flex items-center gap-2"><img className="h-6 w-6 rounded-full" src="https://imgs.search.brave.com/m5uimNhN8PWgJ-xav3Qvom0MQJOuba3GLlWrhgWiehw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMmYxUHEy/eThhcVVYV2dWU0No/MWNONC9kZmU1MWUy/MDRjYmVmOGZkZjA0/OWIzMWY4OWE2NWUw/NS9mb29kLWFuZC1k/cmluay1pbWFnZXMu/anBnP2ZpdD1maWxs/Jnc9NjAwJmg9NDAw"/>JKs Kitchen</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-3 py-1 flex items-center gap-2"><img className="h-6 w-6 rounded-full" src="https://imgs.search.brave.com/TSi0cGpEKa6_g92RltsBoEhzFv3uM35IGf0eQwrEAKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw"/>React Course</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-3 py-1 flex items-center gap-2"><img className="h-6 w-6 rounded-full" src="https://imgs.search.brave.com/MUXzt3X3ZPKAwEoRjEH-n9DjzigAI53AZiPWw7sj3GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzY0Mi80ODIv/NDU4L2d1bi1za3Vs/bC1tb25rZXktbWFz/ay1yb2Nrc3Rhci1o/ZC13YWxscGFwZXIt/cHJldmlldy5qcGc"/>GTA 5</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-3 py-1 flex items-center gap-2"><img className="h-6 w-6 rounded-full" src="https://imgs.search.brave.com/yLA3h0jfkaQ0LNCjoCgfyJg2372tMbbn41tlH36DsXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzIv/MXpjNHFjLmpwZw"/>Comedy Scenes</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-3 py-1 text-lg flex items-center gap-2"><img className="h-6 w-6 rounded-full" src="https://imgs.search.brave.com/rseFYwLpUNQPi_e7H0oBaa-7WpquDgwCKmMldRy4HVw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JkLzgz/LzAxL2JkODMwMTli/ZmIwMGQ5NzdmZmEy/N2M2OGYwNGJhNzE0/LmpwZw"/>Sci-Fi</li>
                </ul>
            </div>
            <div className="border-t-[1px] border-gray-300 w-40"></div>
            <div className="mb-2">
                <ul>
                    <li className="font-bold text-lg p-2">Explore</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-4 py-1 flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/JtXQBLQQ2DEGoGf4a-9_qV3ct6Vwf0rlnof7olqMVrs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni81MjIyLzUyMjI4/MjQucG5n"/>Movies</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer  pl-4 py-1 flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/F77DBSFi6NJPvdSbkI54VGd-SDZ88eQ3QnxUJlSJ5ts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9mb29kLWFu/ZC1kcmlua3MvZm9v/ZC1yZXN0YXVyYW50/LWljb24uc3Zn.svg"/>Food</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-4 py-1 flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/R1CbZbncYt_AxXxdizmrNE8A-4zvvgz807kYBGygtUk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29saWQtbG9j/YXRpb25zLWljb24t/c2V0LzY0L0dhbWVz/XzItNjQucG5n"/>Gaming</li>
                    <li className="hover:bg-gray-200 hover:rounded-full cursor-pointer pl-4 py-1 flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/U2jZ5HHTJRt-K7BZjPSCqkrwwkKGgApOC9m9_ryXmok/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW9zLTctaWNv/bnMvNTAvaGVhZHBo/b25lcy02NC5wbmc"/>Music</li>
                </ul>
            </div>
            <div className="border-t-[1px] h-1 border-gray-300 w-40"></div>
            <div className="mb-2">
                <ul>
                    <li className="cursor-pointer hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/mWPvQFNdInBra5Ujf1yTubhem2jz42KtAf8u8Jzgwq0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMzM3NTQ3LTIw/MC5wbmc"/>Settings</li>
                    <li className="cursor-pointer  hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/6rNd5h1WRwdiuucAxNveEHIhcLZWNHDjZ93F_gYvcWI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9jb21tdW5p/Y2F0aW9uLWNoYXQt/Y2FsbC9xdWVzdGlv/bi1tYXJrLWNpcmNs/ZS1pY29uLnN2Zw.svg"/>Help</li>
                    <li className="cursor-pointer  hover:bg-gray-200 hover:rounded-full pl-3 py-1 text-lg flex items-center gap-1"><img className="h-4" src="https://imgs.search.brave.com/9dn-SM0bLK2giLggUZJF4XbREgfhSt22_bb9hZIpclg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83MjY5LzcyNjk5/OTUucG5n"/>Contact</li>
                </ul>
            </div>
                </div>
                </Transition>
            );
        }
        
        export default Sidebar;
