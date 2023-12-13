import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr,Flex, Center } from "@chakra-ui/react";

import {DeleteIcon} from '@chakra-ui/icons'
import React, { useContext, useState } from "react";
import { APIContext } from "../Context/AppContext";
const TableList = () => {
    const { responseData, setResponseData } = useContext(APIContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = (itemID) => {
        setItemToDelete(itemID);
        setIsModalOpen(true)
    }

    const handleConfirmDelete = () => {
        const updateData = responseData.filter((item) => item.Title !== itemToDelete);

        setResponseData(updateData);
        setIsModalOpen(false);
    };
    
    const handleNotSure = () => {
        const deleteUrl = responseData && responseData.length > 0 ? responseData[0].DeleteUrl : '';
        window.open(deleteUrl,'_blank')
    }

    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };

    console.log(responseData);

    return (
        <Flex paddingX={'3%'} mb={'100px'}>
            <TableContainer whiteSpace="" justifyContent="center" alignItems="center" >
                <Table variant="simple" colorScheme="teal" size="lg" textAlign="center" justifyContent="center" alignItems="center">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th><Center>Store</Center></Th>
                            <Th><Center>Title</Center></Th>
                            <Th><Center>Regular Price</Center></Th>
                            <Th><Center>Current Price</Center></Th>
                            <Th><Center>Discount</Center></Th>
                            <Th><Center>Is On Sale</Center></Th>
                            <Th><Center>Delete</Center></Th>
                        </Tr>
                    </Thead>

                    <Tbody  >
                        {Array.isArray(responseData)
                            ? responseData.map((item, index) => (
                                  <Tr key={index}  >
                                      <Td><Center>{item.Store}</Center></Td>
                                      <Td textAlign={'center'}><Center>{item.Title}</Center></Td>
                                      <Td><Center>$ {item.RegularPrice}</Center></Td>
                                      <Td><Center>$ {item.CurrentPrice}</Center></Td>
                                      <Td><Center>{Math.round(((item.RegularPrice - item.CurrentPrice) / item.RegularPrice) * 100)}%</Center></Td>
                                      <Td><Center>{item.IsOnSale ? "Yes" : "No"}</Center></Td>
                                      <Td cursor={"pointer"} onClick={() => handleDelete(item.Title)}>
                                         <Center> <DeleteIcon border={'5px'}  _hover={{color:'pink.500'}}/></Center>
                                      </Td>
                                  </Tr>
                              ))
                            : null}
                    </Tbody>

                    <Modal isOpen={isModalOpen} onClose={handleCancelDelete}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Confirm Deletion</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>Are you sure you want to delete {itemToDelete}?</ModalBody>
                            <ModalFooter>
                                <Button 
                                marginRight={'10px'}
                                colorScheme="red" 
                                onClick={handleConfirmDelete}>
                                    Yes
                                </Button>
                                <Tooltip label="Direct link to product" hasArrow>
                                <Button
                                    colorScheme="yellow"
                                    onClick={handleNotSure}
                                >
                                    Not sure
                                </Button>
                                </Tooltip>
                                <Button onClick={handleCancelDelete}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Table>
            </TableContainer>
        </Flex>
    );
};

export default TableList;
