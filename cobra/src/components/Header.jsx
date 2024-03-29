
const Header = () => {
    return (
        <div className="lg:grid lg:grid-cols-3 flex flex-row justify-between items-center h-[35px] gap-4 bg-gray-100 px-2">
            <div role="tablist" className="flex flex-row gap-2">
                <a role="tab" className="tab font-roboto font-medium tab-active bg-base-100 md:ml-8" href="https://cobragolf.com/" aria-label="https://cobragolf.com/">
                    COBRA&nbsp;<span className="font-normal md:inline hidden">GOLF</span>
                </a>
                <a role="tab" className="tab font-roboto font-medium hover:bg-gray-200" href="https://pumagolf.com" aria-label="https://pumagolf.com">
                    PUMA&nbsp;<span className="font-normal md:inline hidden">GOLF</span>
                </a>
            </div>
            <div className="flex lg:justify-center md:justify-center sm:justify-end text-sm font-roboto font-regular">FREE SHIPPING OVER $50</div>
        </div>
    )
}



export default Header;