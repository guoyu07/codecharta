export interface colorRange {
    from: number;
    to: number;
    flipped: boolean;
}
export declare enum MapColors {
    positive = 6925888,
    neutral = 14535680,
    negative = 8523278,
    odd = 5249564,
    even = 13740457,
    selected = 15434521,
    defaultC = 9022644,
    positiveDelta = 6946624,
    negativeDelta = 16715278,
    base = 6710886,
}
export interface renderSettings {
    heightKey: string;
    colorKey: string;
    renderDeltas: boolean;
    colorRange: colorRange;
    mapSize: number;
    deltaColorFlipped: boolean;
}
