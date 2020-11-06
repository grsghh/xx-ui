import {
  Select,
  Option,
  OptionGroup,
  Input,
  InputNumber,
  Radio,
  Dialog,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Cascader,
  Switch,
  Slider,
  TimeSelect,
  TimePicker,
  DatePicker,
  Upload,
  Rate,
  ColorPicker,
  Transfer,
  Form,
  FormItem,
  Table,
  TableColumn,
  Button,
  Alert,
  Loading,
  Message,
  MessageBox,
  Notification,
  Submenu,
  RadioGroup,
  RadioButton

} from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(InputNumber)
    Vue.use(Radio)
    Vue.use(Dialog)
    Vue.use(Checkbox)
    Vue.use(CheckboxButton)
    Vue.use(CheckboxGroup)
    Vue.use(Cascader)
    Vue.use(Switch)
    Vue.use(Slider)
    Vue.use(TimePicker)
    Vue.use(TimeSelect)
    Vue.use(DatePicker)
    Vue.use(Upload)
    Vue.use(Rate)
    Vue.use(ColorPicker)
    Vue.use(Transfer)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Button)
    Vue.use(Alert)
    Vue.use(Loading)
    Vue.use(Submenu)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)


    Vue.prototype.$message = Message;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$notify = Notification;

  }
}

export default element
