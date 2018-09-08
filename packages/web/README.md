## WebApp

### Router 运作

container -> view (一般情况下)
container -> connector -> view (这样通过 connector 来决定展示哪种 view rn or web)

### VS Code

- <kbd>⌘</kbd> + <kbd>.</kbd>
  作用于 tslint 报错处，可以选择 disabled

### Yup

在 withFormik 配置中可以设置 validationSchema，同时可以设置是否开启 validateOnChange (默认开启，即用户输入时验证，而非 blur 时验证),
当 validateOnBlur 和 validateOnChange 同时关闭时，只有用户提交的时候才会验证
