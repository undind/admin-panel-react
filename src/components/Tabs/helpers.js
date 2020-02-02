export const getPathRouter = location => {
    switch (location.pathname) {
        case "/reports":
            return {
                newPathname: ["/reports", "/reports/quantity"],
                newSearch: (location.search = null),
                activeLink: params => {
                    const { location, index } = params;
                    return location.pathname.includes(this.newPathname[index]);
                }
            };

        case "/reports/quantity":
            return {
                newPathname: ["/reports", "/reports/quantity"],
                newSearch: (location.search = null),
                activeLink: params => {
                    const { location, index } = params;
                    console.log(location.pathname,  this.newPathname)
                    return location.pathname.includes(
                        this.newPathname[index - 1]
                    );
                }
            };

        case "/orders":
            return {
                newPathname: location.pathname,
                newSearch: "?status=",
                activeLink: params => {
                    const { numberSearch, index } = params;
                    return numberSearch === index;
                }
            };

        default:
            return location.pathname;
    }
};
