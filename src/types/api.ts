export type APISpaceXResponse = {
    docs:           Doc[];
    totalDocs:      number;
    offset:         number;
    limit:          number;
    totalPages:     number;
    page:           number;
    pagingCounter:  number;
    hasPrevPage:    boolean;
    hasNextPage:    boolean;
    prevPage:       null;
    nextPage:       number;
}

export type Doc = {
    fairings:              Fairings | null;
    links:                 Links;
    static_fire_date_utc:  Date | null;
    static_fire_date_unix: number | null;
    net:                   boolean;
    window:                number | null;
    rocket:                Rocket;
    success:               boolean | null;
    failures:              Failure[];
    details:               null | string;
    crew:                  Crew[];
    ships:                 string[];
    capsules:              string[];
    payloads:              string[];
    launchpad:             Launchpad;
    flight_number:         number;
    name:                  string;
    date_utc:              Date;
    date_unix:             number;
    date_local:            Date;
    date_precision:        DatePrecision;
    upcoming:              boolean;
    cores:                 Core[];
    auto_update:           boolean;
    tbd:                   boolean;
    launch_library_id:     null | string;
    id:                    string;
}

export type Core = {
    core:            null | string;
    flight:          number | null;
    gridfins:        boolean | null;
    legs:            boolean | null;
    reused:          boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type:    LandingType | null;
    landpad:         Landpad | null;
}

export enum LandingType {
    Asds = "ASDS",
    Ocean = "Ocean",
    Rtls = "RTLS",
}

export enum Landpad {
    The5E9E3032383Ecb267A34E7C7 = "5e9e3032383ecb267a34e7c7",
    The5E9E3032383Ecb554034E7C9 = "5e9e3032383ecb554034e7c9",
    The5E9E3032383Ecb6Bb234E7CA = "5e9e3032383ecb6bb234e7ca",
    The5E9E3032383Ecb761634E7Cb = "5e9e3032383ecb761634e7cb",
    The5E9E3032383Ecb90A834E7C8 = "5e9e3032383ecb90a834e7c8",
    The5E9E3033383Ecb075134E7CD = "5e9e3033383ecb075134e7cd",
    The5E9E3033383Ecbb9E534E7Cc = "5e9e3033383ecbb9e534e7cc",
}

export type Crew = {
    crew: string;
    role: string;
}

export enum DatePrecision {
    Day = "day",
    Hour = "hour",
    Month = "month",
}

export type Failure = {
    time:     number;
    altitude: number | null;
    reason:   string;
}

export type Fairings = {
    reused:           boolean | null;
    recovery_attempt: boolean | null;
    recovered:        boolean | null;
    ships:            string[];
}

export enum Launchpad {
    The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
    The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
    The5E9E4502F509094188566F88 = "5e9e4502f509094188566f88",
    The5E9E4502F5090995De566F86 = "5e9e4502f5090995de566f86",
}

export type Links = {
    patch:      Patch;
    reddit:     Reddit;
    flickr:     Flickr;
    presskit:   null | string;
    webcast:    null | string;
    youtube_id: null | string;
    article:    null | string;
    wikipedia:  null | string;
}

export type Flickr = {
    small:    any[];
    original: string[];
}

export type Patch = {
    small: null | string;
    large: null | string;
}

export type Reddit = {
    campaign: null | string;
    launch:   null | string;
    media:    null | string;
    recovery: null | string;
}

export enum Rocket {
    The5E9D0D95Eda69955F709D1Eb = "5e9d0d95eda69955f709d1eb",
    The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
    The5E9D0D95Eda69974Db09D1Ed = "5e9d0d95eda69974db09d1ed",
}