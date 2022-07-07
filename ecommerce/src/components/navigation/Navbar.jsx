import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { Menu, Popover, Transition } from '@headlessui/react'
import {BookmarkAltIcon,BriefcaseIcon, ChartBarIcon,CheckCircleIcon,CursorClickIcon,DesktopComputerIcon,GlobeAltIcon,InformationCircleIcon,
  MenuIcon,NewspaperIcon,OfficeBuildingIcon,PhoneIcon,PlayIcon,ShieldCheckIcon,UserGroupIcon,ViewGridIcon,XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Alert from '../../components/Alert'
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth'
import { get_categories } from '../../redux/actions/categories'
import { get_search_products } from '../../redux/actions/products';
import SearchBox from './SearchBox'
import { ShoppingCartIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = ({isAuthenticated, user, logout, get_categories, categories, get_search_products, /*total_items */}) => {

  const [redirect, setRedirect] = useState(false);
  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    category_id: 0,
    search: ''
  });
  const { category_id, search } = formData;
  
  useEffect(() => {
    get_categories()
  }, [])

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    get_search_products(search, category_id);
    setRender(!render);
  }

  if(render){
    return <Navigate to='/search' />;
  }



  const logoutHandler = () => {
    logout()
    setRedirect(true);
  }

  if (redirect){
    window.location.reload(false)
    return <Navigate to='/' />;
  }

  const authLinks = (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full  text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/dashboard"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Dashboard
                </Link>
              )}
            </Menu.Item>
            
            
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
  const guestLinks = (
    <Fragment>
      <Link to="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Sign in
      </Link>
      <Link
        to="/signup"
        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Sign up
      </Link>
    </Fragment>
  )

  return (
    <>
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            
            <Link to='/' className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              
              <NavLink to="/shop" className={window.location.pathname==='/search'?' text-base font-medium text-gray-500 hover:text-gray-900':'mt-2 text-base font-medium text-gray-500 hover:text-gray-900'}>
                Shop
              </NavLink>
              
              {window.location.pathname==='/search'?<></>:<SearchBox 
              search={search}
              onChange={onChange}
              onSubmit={onSubmit}
              categories={categories}
              />}
              
             
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link to="/cart">
                <ShoppingCartIcon className="h-8 w-8 cursor-pointer text-gray-300 mr-4"/>
                <span className="text-xs absolute top-1 mt-3 ml-4 bg-red-500 text-white font-semibold rounded-full px-2 text-center">{/*total_items */}</span>
              </Link>
              {
                isAuthenticated ? authLinks:guestLinks
              }
            </div>
          </div>
        </div>
      </div>

      
    </Popover>
    <Alert />
    </>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  categories: state.Categories.categories,
  /*total_items: state.Cart.total_items*/
 
})

export default connect(mapStateToProps,{
  logout,
  get_categories,
  get_search_products,
}) (Navbar)