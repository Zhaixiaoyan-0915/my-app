import modal from "../components/modal";
export default {
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        handleClick() {
            this.isShow = true;
        },
        handleSend() {
            this.isShow = false;
        },
        handleDel() {
            this.isShow = false;
        },
    },
    components: {
        modal,
    },
};