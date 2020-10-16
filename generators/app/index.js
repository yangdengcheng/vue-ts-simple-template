const Generators = require('yeoman-generator');

module.exports = class extends Generators {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }

    writing() {
        const fileFileList = [
            ".browserslistrc",
            ".editorconfig",
            ".env",
            ".eslintrc.js",
            ".gitignore",
            "README.md",
            "package.json",
            "postcss.config.js",
            "public/favicon.ico",
            "public/index.html",
            "public/tinymce/langs/en.js",
            "public/tinymce/langs/th_TH.js",
            "src/App.vue",
            "src/api/interfaces/table.ts",
            "src/api/table.ts",
            "src/api/user.ts",
            "src/assets/en-icon.png",
            "src/assets/logo.png",
            "src/assets/logo_eggMall.png",
            "src/assets/logo_white.png",
            "src/assets/th-icon.png",
            "src/components/LangBox/index.vue",
            "src/components/ThemePicker/index.vue",
            "src/components/Tinymce/config/index.ts",
            "src/components/Tinymce/index.vue",
            "src/filters/index.ts",
            "src/icons/components/components.ts",
            "src/icons/components/dashboard.ts",
            "src/icons/components/editor.ts",
            "src/icons/components/example.ts",
            "src/icons/components/index.ts",
            "src/icons/components/table.ts",
            "src/icons/svg/components.svg",
            "src/icons/svg/dashboard.svg",
            "src/icons/svg/editor.svg",
            "src/icons/svg/example.svg",
            "src/icons/svg/table.svg",
            "src/icons/svg-icons.ts",
            "src/lang/en.ts",
            "src/lang/index.ts",
            "src/lang/th.ts",
            "src/layout/components/HomeNavBar.vue",
            "src/layout/components/Setting.vue",
            "src/layout/components/Sidebar.vue",
            "src/layout/components/SidebarItem.vue",
            "src/layout/index.vue",
            "src/main.ts",
            "src/plugins/element.ts",
            "src/router.ts",
            "src/shims-vue.d.ts",
            "src/store/index.ts",
            "src/store/modules/app.ts",
            "src/store/modules/user.ts",
            "src/styles/_variables.scss",
            "src/styles/_variables.scss.d.ts",
            "src/styles/element-variables.scss",
            "src/styles/element-variables.scss.d.ts",
            "src/styles/index.scss",
            "src/styles/reset.scss",
            "src/styles/svgicon.scss",
            "src/utils/request.ts",
            "src/utils/validate.ts",
            "src/views/Dashboard/index.vue",
            "src/views/EditorPage.vue",
            "src/views/LoginPage.vue",
            "src/views/ParentPage/components/TodoList.vue",
            "src/views/ParentPage/index.vue",
            "src/views/TablePage.vue",
            "tsconfig.json",
            "vue.config.js"
        ]

        fileFileList.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}