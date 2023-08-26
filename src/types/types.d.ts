type TNotes = {
  id: uuid;
  title: string;
  text: string;
};

type Tid = {
  id: string;
};

type TComponentInput = {
  placeholder?: string;
  value?: string;
  onChange?: (e: string) => void;
};

type TComponentButton = {
  text: string;
  onPress?: () => void;
  isDelete?: boolean;
};
