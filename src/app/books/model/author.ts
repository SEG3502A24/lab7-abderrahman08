export class Bio {
    constructor(public biodata: string) {}
}

export class Author {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public bio?: Bio
    ) {}
}
