export type PendencyArgs = {
  issue: number;
  observation: string;
};

export type EditArgs = {
  date: Date;
  Layout2: string;
  value: string;
};

export type CategorizationArgs = {
  Layout2Name: string;
  showReportDialogRef: React.MutableRefObject<() => void>;
};
