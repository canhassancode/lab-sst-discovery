/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "LabSSTS3": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "LabSSTWeb": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
export {}
