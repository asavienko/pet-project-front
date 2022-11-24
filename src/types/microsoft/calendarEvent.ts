export type TOutlookCalendarEvent = {
  subject: string;
  isAllDay: boolean;
  isCancelled: boolean;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
};
