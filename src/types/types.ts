export interface IIcon {
  32: string | null;
  64: string | null;
  128: string | null;
}

export interface ICard {
  id: string;
  vendor: {
    id: string;
    name: string;
    address: string;
    email: string;
    type: string;
  };
  version: number;
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  licenseUrl: string | null;
  documentationUrl: string;
  sourceCodeUrl: string;
  requiredMemory: string | null;
  processTimeout: string | null;
  features: unknown[]; // Update this type as needed
  encryption: boolean;
  network: string;
  defaultBucket: boolean;
  defaultBucketStage: string | null;
  forwardToken: boolean;
  forwardTokenDetails: boolean;
  injectEnvironment: boolean;
  complexity: unknown; // Update this type as needed
  category: unknown; // Update this type as needed
  categories: string[];
  cpuShares: unknown; // Update this type as needed
  uiOptions: string[];
  imageParameters: Record<string, unknown>;
  stackParameters: Record<string, unknown>;
  testConfiguration: unknown | null;
  configurationSchema: Record<string, unknown>; // Update this type as needed
  configurationRowSchema: string | null;
  configurationDescription: string;
  configurationFormat: string;
  emptyConfiguration: string | null;
  emptyConfigurationRow: string | null;
  actions: unknown[]; // Update this type as needed
  fees: boolean;
  limits: unknown; // Update this type as needed
  logger: string;
  loggerConfiguration: unknown; // Update this type as needed
  stagingStorageInput: string;
  stagingStorageOutput: string;
  isDeprecated: boolean;
  expiredOn: unknown; // Update this type as needed
  replacementApp: unknown; // Update this type as needed
  isPublic: boolean;
  isPublished: boolean;
  publishedVersion: number;
  uri: string;
  repository: {
    type: string;
    uri: string;
    tag: string;
    options: {
      region: string;
    };
    digest: string;
  };
  publishingStatus: string;
  icon: IIcon;
}

export interface ICardDetails extends ICard {}