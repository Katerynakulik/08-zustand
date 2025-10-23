export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}
export interface CreateNote {
  title: string;
  content: string;
  tag: string;
}
export enum NoteTag {
  Work = "Work",
  Personal = "Personal",
  Meeting = "Meeting",
  Shopping = "Shopping",
  Todo = "Todo",
}
