/* eslint-disable import/prefer-default-export */
export enum UpdateStrategy {
    DATA = 'DATA',
    REPLACE= 'REPLACE'
}

export interface IntegrationOptions {
    updateStrategy?: UpdateStrategy;
}
