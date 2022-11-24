export type TTimeObject = {
  str: string;
  date: Date;
  timestamp: number;
};

export type TSlot = {
  start: TTimeObject;
  end: TTimeObject;
};

export type TAvailability = {
  date: TTimeObject;
  slots: TSlot[];
};

export type TCalendarEvent = {
  start: Date;
  end: Date;
  title: string;
  allDay?: boolean;
  data: {
    color: string;
    isVideoConference: boolean;
  };
  [key: string]: any;
};
