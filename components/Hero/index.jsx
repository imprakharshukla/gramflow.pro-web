"use client"

import NavLink from "../NavLink"
import { toast } from "react-hot-toast"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Sell at <span className="text-blue-600">scale</span> on <span>Instagram</span>
                </h1>
                <p className="max-w-xl mx-auto">
                   Automate your Instagram store with GramFlow and let us handle the accounting, inventory, and shipping.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="https://6h36v1x0q8s.typeform.com/to/bXV3pMAg"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Get in Touch
                    </NavLink>
                    <NavLink
                    onClick={() => {
                        toast("We are adding this soon.")
                    }}
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Watch a video
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero