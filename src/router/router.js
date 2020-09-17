import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";
import RegistrationInitForm from "../components/forms/auth/RegistrationInitForm";
import RegistrationCompleteForm from "../components/forms/auth/RegistrationCompleteForm";
import CreateExpenseForm from "../components/forms/expense/CreateExpenseForm";
import Registration from "../views/auth/Registration";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createExpense",
    name: "createExpense",
    component: CreateExpenseForm
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
