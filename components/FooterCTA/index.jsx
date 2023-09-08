import SectionWrapper from "../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Make your next sale with us
                </h2>
                <p className="mt-3 text-gray-600">
                    Fast-track your stores and ship your products to your customers in no time.
                </p>
                <NavLink
                    href="https://6h36v1x0q8s.typeform.com/to/bXV3pMAg"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Get in Touch
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA